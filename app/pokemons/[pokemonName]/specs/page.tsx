import { getPokemonDetails } from "@/services/pokemonApi";

interface PageProps {
  params: Promise<{ pokemonName: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { pokemonName } = await params;
  const pokemon = await getPokemonDetails(pokemonName);

  return (
    <div>
      <p>{pokemon.name}</p>

      <p>{pokemon.base_experience}</p>

      <p>{pokemon.order}</p>
    </div>
  );
};

export default Page;

// app/pokemons/[pokemonName]/specs/page.tsx
