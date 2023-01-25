import { TPokemonType } from "../../interface/interface";

export interface ICardProps {
  id: number,
  name: string,
  image: string,
  preview?: string,
  type: TPokemonType,
}
