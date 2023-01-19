import { selector } from "recoil";

//api
import { requester } from "../../api/requester";

//recoil: atoms
import { atomPokemon } from "../atoms/atoms";

export const selectorGetPokemon = selector({
  key: 'selectorGetPokemon',
  get: async ({get}) => {
    const pokemon = get(atomPokemon)

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

