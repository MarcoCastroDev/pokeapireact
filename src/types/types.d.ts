export type Pokemon = {
  slice(arg0: number, arg1: number): unknown
  name: string,
  id: string,
  imgSrc: string
}

export type PokemonDetails = {
  name: string,
  id: string,
  imgSrc: string,
  hp: number,
  attack: number,
  defense: number
}