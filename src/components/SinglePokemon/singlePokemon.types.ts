import { IPokemon } from "../../interface/interface";

export interface ISinglePokemon {
  pokemon: IPokemon;
  loading: boolean;
  error: boolean;
}