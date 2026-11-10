"use client";
import { useQuery } from "@tanstack/react-query";
import css from "./SongList.module.css";
import { getSongs } from "@/services/songsApi";
import { useState } from "react";

const SongList = () => {
  const [artist, setArtist] = useState("");

  const songsQuery = useQuery({
    queryKey: ["songs", artist],
    queryFn: () => getSongs(artist),
    refetchOnMount: false,
  });

  const songs = songsQuery.data?.items || [];

  return (
    <div className={css["songList"]}>
      <input
        type="text"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />

      <ul>
        {songs.map((el) => {
          return (
            <li key={el._id}>
              {el.title} - {el.artist}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SongList;
