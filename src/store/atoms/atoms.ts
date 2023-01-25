import { atom } from 'recoil'
import { IPokemonFetch, IPokemon } from '../../interface/interface'

export const atomPokemonSearch = atom({
  key: 'atomPokemonSearch',
  default: ''
})

export const atomPokemonFetch = atom<IPokemonFetch[]>({
  key: 'atomPokemonFetch',
  default: []
})

export const atomPokemonOffSet = atom<number>({
  key: 'atomPokemonOffSet',
  default: 0
})

export const atomPokemonList = atom<IPokemon[]>({
  key: 'atomPokemonList',
  default: []
})

export const atomPokemon = atom<IPokemon>({
  key: "atomPokemon",
  default: undefined,
});