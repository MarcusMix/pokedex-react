import { IPokemon } from "../../interface/interface";


export interface IPokemonsSection {
  pokemons: IPokemon[];
  pokemonCount: number;
  loading: boolean;
  disabledFetch: boolean;
  hasErrors: boolean;
  retryFetch: () => any;
}