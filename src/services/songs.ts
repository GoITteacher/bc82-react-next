import axios from "axios";

export interface Song {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
  releaseYear: number;
  durationSeconds: number;
  label: string;
  language: string;
  createdAt: string;
  updatedAt: string;
}

interface FetchSongsResponse {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  items: Song[];
}

export const fetchSongs = async (artist: string) => {
  const params = {
    artist: artist,
  };

  const res = await axios.get<FetchSongsResponse>(
    "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com/public/songs",
    { params }
  );

  return res.data;
};
