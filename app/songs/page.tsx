import { getSongs } from "@/lib/songs";
import css from "./Page.module.css";
import Link from "next/link";
import { sleep } from "@/utils/sleep";

const Page = async () => {
  await sleep(5000);
  const songsData = await getSongs();

  return (
    <div className={css["page"]}>
      {songsData.items.map((el) => {
        return (
          <li>
            <Link href={`/songs/${el._id}`}>{el.title}</Link>
          </li>
        );
      })}
    </div>
  );
};

export default Page;
