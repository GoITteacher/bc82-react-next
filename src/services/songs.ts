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

interface SongsResponse {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  items: Song[];
}

export const getSongs = async (page: number) => {
  const BASEURL = "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com";
  const END_POINT = "/public/songs";
  const url = BASEURL + END_POINT;

  const params = {
    page: page,
  };

  const res = await axios.get<SongsResponse>(url, { params });
  return res.data;
};
