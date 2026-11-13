import { getSongById } from "@/lib/songs";
import css from "./Page.module.css";
import Link from "next/link";
interface PageProps {
  params: Promise<{ songId: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { songId } = await params;
  const song = await getSongById(songId);

  return (
    <div className={css["page"]}>
      <h1>
        {song.title} - {song.artist}
      </h1>
      <Link href="/songs">Back</Link>
    </div>
  );
};

export default Page;
