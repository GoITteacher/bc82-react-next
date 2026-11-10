import { getPokemonDetails } from "@/services/pokemonApi";
import Link from "next/link";

interface PageProps {
  params: Promise<{ pokemonName: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { pokemonName } = await params;
  const pokemon = await getPokemonDetails(pokemonName);

  return (
    <main>
      <h1>Pokemon Details: {pokemonName}</h1>

      <p>id: {pokemon.id}</p>
      <p>weight: {pokemon.weight}</p>
      <p>height: {pokemon.height}</p>
      <Link href={`/pokemons/${pokemonName}/specs`}>More Info</Link>
    </main>
  );
};

export default Page;
