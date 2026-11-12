import BackButton from "@/components/BackButton/BackButton";
import { getCars } from "@/services/carService";

import Link from "next/link";

const Page = async () => {
  const res = await getCars();

  return (
    <div>
      <h1>Car List</h1>
      <BackButton />
      <ul>
        {res.items.map((el) => {
          return (
            <li key={el._id}>
              <Link href={`/cars/${el._id}`}>
                {el.make}-{el.model}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Page;
