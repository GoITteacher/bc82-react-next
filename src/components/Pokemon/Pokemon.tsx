import axios from "axios";
import SearchForm from "../SearchForm/SearchForm";
import css from "./Pokemon.module.css";
import { useState } from "react";

interface PokemonItem {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  sprites: { front_default: string };
}

const Pokemon = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(true);

  const [pokemonDetails, setPokemonDetails] = useState<PokemonItem | null>(
    null
  );

  const searchPokemon = async (pokemonName: string) => {
    setIsLoading(true);
    setIsError(false);

    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
      const result = await axios.get<PokemonItem>(url);
      setPokemonDetails(result.data);
    } catch {
      setIsError(true);
    }

    setIsLoading(false);
  };

  return (
    <div className={css["pokemon"]}>
      <SearchForm callback={searchPokemon} />

      {isError && <p>Error</p>}
      {isLoading && <p>Loading</p>}

      {pokemonDetails && (
        <div className={css["details"]}>
          <img
            src={pokemonDetails.sprites.front_default}
            alt={pokemonDetails.name}
            width="400"
          />
          <p>Name: {pokemonDetails.name}</p>
          <p>Weight: {pokemonDetails.weight}</p>
        </div>
      )}
    </div>
  );
};

export default Pokemon;
