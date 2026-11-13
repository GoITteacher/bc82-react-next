import { getSongById } from "@/lib/songs";
import css from "./Page.module.css";
import Link from "next/link";
import BackButton from "@/components/BackButton/BackButton";

interface PageProps {
  params: Promise<{ songId: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { songId } = await params;
  const song = await getSongById(songId);

  return (
    <div className={css["backdrop"]}>
      <div className={css["modal"]}>
        <h1>
          {song.title} - {song.artist}
        </h1>
        <BackButton />
      </div>
    </div>
  );
};

export default Page;
