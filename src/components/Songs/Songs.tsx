import { keepPreviousData, useQuery } from "@tanstack/react-query";
import css from "./Songs.module.css";
import { getSongs } from "../../services/songs";
import { useState } from "react";
import { GetSongsResponse } from "../../types/songs";
import SongsPagination from "../SongsPagination/SongsPagination";

// const myData: GetSongsResponse = {
//   page: 0,
//   perPage: 10,
//   totalItems: 0,
//   totalPages: 0,
//   hasNextPage: false,
//   hasPreviousPage: false,
//   items: [],
// };

const Songs = () => {
  const [userValue, setUserValue] = useState("");
  const [page, setPage] = useState(1);

  const songsQuery = useQuery({
    queryKey: ["songs", { artist: userValue, page: page }],
    queryFn: () => getSongs({ artist: userValue, page: page }),
    // enabled: userValue !== "",
    // retry: 3,
    // retryDelay: 5000,
    // refetchOnMount: false,
    // refetchOnWindowFocus: true,
    // refetchOnReconnect: true,
    // initialData: myData,
    placeholderData: keepPreviousData,
    // staleTime: 20000,
    // cacheTime:
    // cacheTime: 1000,
  });

  const isLoading = songsQuery.isLoading;
  const error = songsQuery.error;
  const songs = songsQuery.data?.items || [];
  const totalPages = songsQuery.data?.totalPages || 1;

  const handleSubmit = (formData: FormData) => {
    const value = formData.get("artist") as string;
    setUserValue(value);
  };

  return (
    <div className={css["songs"]}>
      <form action={handleSubmit}>
        <input type="text" name="artist" />
        <button>Search</button>
      </form>

      <p>QUERY: {userValue}</p>
      <p>PAGE: {page}</p>

      <ul>
        {songs.map((song) => {
          return (
            <li key={song._id}>
              {song.title} - {song.artist}
            </li>
          );
        })}
      </ul>

      {isLoading && <p>Loading data ...</p>}
      {error && <p>Server Error ({error.message})</p>}

      <SongsPagination pageCount={totalPages} onChangePage={setPage} />
    </div>
  );
};

export default Songs;
