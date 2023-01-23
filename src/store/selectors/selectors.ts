import { selector } from "recoil";

//api
import { requester } from "../../api/requester";

//interface
import { IPokemon, IPokemonFetch } from "../../interface/interface";

//recoil: atoms
import { atomPokemonFetch, atomPokemonOffSet, atomPokemonSearch } from "../atoms/atoms";
import { atomHashPokemonsFetch, atomHashPokemonsList } from "../hashs/hash";


//fetch dos 15 pokemons offset
export const selectorFetchPokemons = selector({
  key: 'selectorFetchPokemons',
  get: async ({get}) => {
    get(atomHashPokemonsFetch)
    const offSet = get(atomPokemonOffSet)

      const {data} = await requester({
        baseURL: "https://pokeapi.co/api/v2",
      }).get(`pokemon?limit=15&offset=${offSet}`)

      return data
  }
})

export const selectorGetPokemons = selector({
  key: 'selectorGetPokemons',
  get: async ({get}) => {
    get(atomHashPokemonsList)
    const pokemonFetch = get(atomPokemonFetch)

    //se existir pokemon, executar
    if(pokemonFetch.length > 0) {
      const list = pokemonFetch.map((pokemon: IPokemonFetch) => pokemon.name)

      const result = list.map(async (pokemon) => {
        const {data} = await requester({
          baseURL: "https://pokeapi.co/api/v2",
        }).get(`/pokemon/${pokemon.toLowerCase().trim()}`)

        return data

      })

      const pokemonList = Promise.all(result)

      return pokemonList

    }
  }
})


// pegar 1 pokemon específico
export const selectorGetPokemon = selector({
  key: 'selectorGetPokemon',
  get: async ({get}) => {
    const pokemon = get(atomPokemonSearch)

    //se existir pokemon, executar
    if(pokemon) {
      //importando a API
      const {data} = await requester({
        baseURL: "https://pokeapi.co/api/v2",
      }).get(`/pokemon/${pokemon.toLowerCase().trim()}`) //letras minúsculas e remover espaços em branco

      return data
    }
  }
})

