import axios from "axios";

interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
}

interface PokemonShortInfo {
  name: string;
  url: string;
}

interface GetPokemonsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonShortInfo[];
}

export const getAllPokemons = async () => {
  const BASE_URL = "https://pokeap111i.co/api/v2";
  const END_POINT = "/pokemon";
  const url = BASE_URL + END_POINT;

  const res = await axios.get<GetPokemonsResponse>(url);
  return res.data;
};

export const getPokemonDetails = async (pokemonName: string) => {
  const BASE_URL = "https://pokeapi.co/api/v2";
  const END_POINT = `/pokemon/${pokemonName}`;
  const url = BASE_URL + END_POINT;

  const res = await axios.get<Pokemon>(url);
  return res.data;
};
