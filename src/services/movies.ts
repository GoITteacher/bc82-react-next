import { serverApi } from "./serverConfig";

export interface Movie {
  _id: string;
  title: string;
  director: string;
  genre: string;
  releaseYear: number;
  rating: number;
  durationMinutes: number;
  language: string;
  summary: string;
  createdAt: string;
  updatedAt: string;
}

interface GetMoviesResponse {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  items: Movie[];
}

export const getMovies = async (title: string) => {
  const params = {
    title: title,
  };

  const res = await serverApi.get<GetMoviesResponse>("/public/movies", {
    params,
  });
  return res.data;
};
