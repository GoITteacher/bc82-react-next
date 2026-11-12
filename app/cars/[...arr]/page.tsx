import { getCars } from "@/services/carService";

interface PageProps {
  params: Promise<{ arr: string[] }>;
}

const Page = async ({ params }: PageProps) => {
  const { arr } = await params;
  const [year, make, model, color] = arr;

  const query = year === "all" ? null : { year, make, model, color };
  const res = await getCars(query);

  return (
    <div>
      <h1>Cars Page</h1>
      <p>Year: {year}</p>
      <p>Make: {make}</p>
      <p>Model: {model}</p>

      <ul>
        {res.items.map((el) => {
          return (
            <li>
              {el.make}-{el.model}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Page;
