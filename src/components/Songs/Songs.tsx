import { useState } from "react";
import { fetchSongs, Song } from "../../services/songs";
import SongList from "./SongList/SongList";
import css from "./Songs.module.css";
import SongSearchForm from "./SongSearchForm/SongSearchForm";

const Songs = () => {
  const [arr, setArr] = useState<Song[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const onSearchSongs = async (artist: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await fetchSongs(artist);
      setArr(result.items);
    } catch {
      setError("Server error");
    }

    setIsLoading(false);
  };

  return (
    <div className={css["songs"]}>
      <SongSearchForm onSubmit={onSearchSongs} />

      {isLoading && <p>Loading Songs ...</p>}
      {error && <p>{error}</p>}

      {!isLoading && !error && <SongList songs={arr} />}
    </div>
  );
};

export default Songs;
