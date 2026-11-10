import { getAllPokemons } from "@/services/pokemonApi";
import Link from "next/link";

const sleep = (x: number) => new Promise((res) => setTimeout(res, x));
const Page = async () => {
  await sleep(5000);
  const res = await getAllPokemons();

  return (
    <main>
      <h1>Pokemons</h1>
      <ul>
        {res.results.map((el) => {
          return (
            <li key={el.name}>
              <Link href={`/pokemons/${el.name}`}>{el.name}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Page;
