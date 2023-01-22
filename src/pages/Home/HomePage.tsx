import { useEffect, useState } from "react"

//recoil states, valueLoadable
import {  useRecoilState, useRecoilValueLoadable, useSetRecoilState } from "recoil"
import Card from "../../components/Card/card"
import { Container, FlexBox } from "../../components/components"

//recoil: atoms
import { atomPokemonFetch, atomPokemonOffSet, atomPokemonSearch } from "../../store/atoms/atoms"

//recoil: selectors
import { selectorFetchPokemons, selectorGetPokemon, selectorGetPokemons } from "../../store/selectors/selectors"

const HomePage = () => {

  // local: states
  const [searchPokemon, setSearchPokemon] = useState("")

  // recoil states
  const setPokemon = useSetRecoilState(atomPokemonSearch)
  const setFetchPokemons  = useSetRecoilState(atomPokemonFetch)
  const [pokemonsOffset, setPokemonsOffset] = useRecoilState(atomPokemonOffSet)

  // recoil loadable
  const getLoadablePokemon =  useRecoilValueLoadable(selectorGetPokemon)

  //fetch dos 15 pokemons
  const fetchLoadablePokemon = useRecoilValueLoadable(selectorFetchPokemons)

  const getLoadablePokemons = useRecoilValueLoadable(selectorGetPokemons)

  // lidar com a busca do pokemon
  const handleSearchPokemonClick = () => {
    setPokemon(searchPokemon)
  }

  const handleLoadingPokemons = () => {
    setPokemonsOffset(pokemonsOffset + 15)
  }

  useEffect(() => {
  console.log(getLoadablePokemons.contents)
  },[getLoadablePokemons])

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
      <button onClick={handleLoadingPokemons}>Carregar mais</button>
  </Container>
  )
}

export default HomePage