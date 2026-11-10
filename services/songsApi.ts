import axios from "axios";

interface Song {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
  releaseYear: number;
  durationSeconds: number;
  label: string;
  language: string;
}

interface GetSongsResponse {
  items: Song[];
}

export const getSongs = async (query: string) => {
  const BASE_URL = "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com";
  const END_POINT = "/public/songs";
  const URL = BASE_URL + END_POINT;

  const params = {
    artist: query,
  };

  const res = await axios.get<GetSongsResponse>(URL, { params });
  return res.data;
};
