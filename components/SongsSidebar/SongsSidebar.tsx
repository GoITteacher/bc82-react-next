import Link from "next/link";
import css from "./SongsSidebar.module.css";

const SongsSidebar = () => {
  return (
    <aside className={css["songsSidebar"]}>
      <Link href="/songs">All songs</Link>
      <Link href="/songs/popular">Popular songs</Link>
      <Link href="/songs/new">New Songs</Link>
      <Link href="/songs/top-charts">Top Charts</Link>
    </aside>
  );
};

export default SongsSidebar;
