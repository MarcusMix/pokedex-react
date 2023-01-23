import { useEffect, useState, useMemo, useCallback } from "react"

//recoil states, valueLoadable
import {  useRecoilRefresher_UNSTABLE, useRecoilState, useRecoilValueLoadable, useSetRecoilState } from "recoil"
import Card from "../../components/Card/card"
import { Container, FlexBox } from "../../components/components"

//recoil: atoms
import { atomPokemonFetch, atomPokemonList, atomPokemonOffSet, atomPokemonSearch } from "../../store/atoms/atoms"

//recoil: selectors
import { selectorFetchPokemons, selectorGetPokemon, selectorGetPokemons } from "../../store/selectors/selectors"

//recoil: hash
import {atomHashPokemonsFetch, atomHashPokemonsList} from "../../store/hashs/hash"

const HomePage = () => {

  // local: states
  const [searchPokemon, setSearchPokemon] = useState("")

  // recoil states
  const setPokemon = useSetRecoilState(atomPokemonSearch)
  const setFetchPokemons  = useSetRecoilState(atomPokemonFetch)
  const [pokemonsOffset, setPokemonsOffset] = useRecoilState(atomPokemonOffSet)
  const [pokemonList, setPokemonList] = useRecoilState(atomPokemonList)

  //vai ser usado caso der erro
  const [hashFetchMorePokemons, setHashFetchMorePokemons] = useRecoilState(atomHashPokemonsFetch)
  const [hashPokemonsList, setHashPokemonsList] = useRecoilState(atomHashPokemonsList)

  // caso der erro na chamada, ele se ativará
  // const retryFetchMorePokemons = useRecoilRefresher_UNSTABLE(selectorFetchPokemons)

  // recoil loadable
  const getLoadablePokemon =  useRecoilValueLoadable(selectorGetPokemon)

  //fetch dos 15 pokemons
  const fetchLoadablePokemon = useRecoilValueLoadable(selectorFetchPokemons)

  const getLoadablePokemons = useRecoilValueLoadable(selectorGetPokemons)

  // memo states
  // quando estiver carregando, deixa o botão disable
  const disableFetchMorePokemons = useMemo(() => {
    if(
    fetchLoadablePokemon.state === 'hasError' ||
    fetchLoadablePokemon.state === 'loading' ||
    getLoadablePokemons.state === 'hasError' ||
    getLoadablePokemons.state === 'loading'
    ) {
      return true
    } else {
      return false
    }
  }, [fetchLoadablePokemon.state, getLoadablePokemons.state])

  const hasFetchPokemonError = useMemo(() => {
    if(
      fetchLoadablePokemon.state === 'hasError' ||
      getLoadablePokemons.state === 'hasError'
      ) {
        return true
      } else {
        return false
      }
  }, [fetchLoadablePokemon.state, getLoadablePokemons.state])


  // lidar com a busca do pokemon
  const handleSearchPokemonClick = () => {
    setPokemon(searchPokemon)
  }

  // lidar com a busca dos 15 pokemons
  const handleLoadingPokemons = () => {
    setPokemonsOffset(pokemonsOffset + 15)
  }

  // tratando o erro de pegar os 15 pokemons
  const retryFetchMorePokemons = useCallback(() => {
    if(fetchLoadablePokemon.state === 'hasError') {
        setHashFetchMorePokemons(hashFetchMorePokemons + 1)
    }
    if (getLoadablePokemons.state === 'hasError') {
        setHashPokemonsList(hashPokemonsList + 1)
    }
  }, [getLoadablePokemons.state, getLoadablePokemons.contents])

  useEffect(() => {
    if(getLoadablePokemons.state === 'hasValue' && getLoadablePokemons.contents !== undefined) {
      if(pokemonList.length > 0) { // se pokemonList existe
        setPokemonList(pokemonList.concat(getLoadablePokemons.contents)) // concatena os valores dos pokemons
      } else {
        setPokemonList(getLoadablePokemons.contents) // se não existir, só passa o valor direto
      }
    }
    console.log(getLoadablePokemons.contents)
  },[getLoadablePokemons.state, getLoadablePokemons.contents])

  //pegando 15 pokemons
  useEffect(() => {
    if(fetchLoadablePokemon.state === 'hasValue' && fetchLoadablePokemon.contents !== undefined) {
      setFetchPokemons(fetchLoadablePokemon.contents.results)
    }
  }, [fetchLoadablePokemon.state ,fetchLoadablePokemon.contents])

  return (
    <Container>
      <FlexBox align='flex-start' justify='center' direction='column' gap='xxs'>

      {/* procurando o pokemon */}
      <input type="text" onChange={(event) => setSearchPokemon(event.target.value)} />

      {/* faz a chamada pra procurar */}
      <button onClick={handleSearchPokemonClick}>Procurar</button>

      {/* renderiza uma mensagem de loading*/}
      {getLoadablePokemon.state === "loading" && <div>Loading...</div>}

      {/* renderiza o pokemon, se tiver valor e não for undefined */}
      {getLoadablePokemon.state === "hasValue" &&
        getLoadablePokemon?.contents !== undefined && (

        <Card
          id={getLoadablePokemon.contents.id}
          image={getLoadablePokemon?.contents?.sprites?.other?.dream_world?.front_default || getLoadablePokemon?.contents?.sprites.other?.["official-artwork"]?.front_default || ''}
          name={getLoadablePokemon?.contents?.name}
          preview={getLoadablePokemon?.contents?.sprites?.versions?.["generation-v"]?.["black-white"]?.animated?.front_default}
          type={getLoadablePokemon?.contents?.types[0]?.type?.name}
        />
      )}

      </FlexBox>

      <FlexBox align='flex-start' justify='center' direction='row' gap='xxs'>
          {pokemonList?.map((pokemon) => (
            <Card
            id={pokemon.id}
            image={pokemon.sprites?.other?.dream_world?.front_default || pokemon.sprites.other?.["official-artwork"]?.front_default || ''}
            name={pokemon.name}
            preview={pokemon.sprites?.versions?.["generation-v"]?.["black-white"]?.animated?.front_default}
            type={pokemon.types[0]?.type?.name}
          />
          ))}
      </FlexBox>
      <button
        // botão que puxa mais 15 pokemons
        disabled={disableFetchMorePokemons} // use memo disable
        onClick={handleLoadingPokemons}
      >
        Carregar mais
      </button>


      {hasFetchPokemonError && (
        // caso der erro, esse botão aparecerá para recarregar o conteúdo
        <button
        onClick={() => retryFetchMorePokemons()}
      >
        Tentar Novamente
      </button>
      )}
  </Container>
  )
}

export default HomePage