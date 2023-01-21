import { useState } from "react"

//recoil states, valueLoadable
import { useRecoilState, useRecoilValueLoadable } from "recoil"
import Card from "../../components/Card/card"

//recoil: atoms
import { atomPokemon } from "../../store/atoms/atoms"

//recoil: selectors
import { selectorGetPokemon } from "../../store/selectors/selectors"

const HomePage = () => {

  // local: states
  const [searchPokemon, setSearchPokemon] = useState("")

  // recoil states
  const [pokemon, setPokemon] = useRecoilState(atomPokemon)

  // recoil loadable
  const getLoadablePokemon =  useRecoilValueLoadable(selectorGetPokemon)

  console.log(getLoadablePokemon?.contents)

  // lidar com a busca do pokemon
  const handleSearchPokemonClick = () => {
    setPokemon(searchPokemon)
  }

  return (
    <>
    <div>

      {/* procurando o pokemon */}
      <input type="text" onChange={(event) => setSearchPokemon(event.target.value)} />
        {pokemon}

        {/* faz a chamada pra procurar */}
        <button onClick={handleSearchPokemonClick}>Procurar</button>

        {/* renderiza uma mensagem de loading*/}
        {getLoadablePokemon.state === "loading" && <div>Loading...</div>}

        {/* renderiza o pokemon, se tiver valor e não for undefined */}
        {getLoadablePokemon.state === "hasValue" &&
        getLoadablePokemon?.contents !== undefined && (


        <Card
          id={getLoadablePokemon?.contents?.id}
          image={getLoadablePokemon?.contents?.sprites?.other?.dream_world?.front_default}
          name={getLoadablePokemon?.contents?.name}
          preview={getLoadablePokemon?.contents?.sprites?.version?.["generaion-v"]?.["black-white"].animated?.front_default}
          type={getLoadablePokemon?.contents?.types[0]?.type?.name}
        />

          // <div>
          //   <img
          //   width="150px"
          //   //  'url' da imagem do pokemon
          //   src={getLoadablePokemon?.contents?.sprites?.front_default}

          //   //  alt com o nome
          //   alt={`pokemom: ${getLoadablePokemon?.contents?.name}`}/>

          //   {/* nome do pokemon */}
          //   <h3>{getLoadablePokemon?.contents?.name}</h3>
          // </div>
        )}
      </div>
    </>
  )
}

export default HomePage