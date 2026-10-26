import axios from "axios";

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

  const url =
    "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com/public/movies";

  const res = await axios.get<GetMoviesResponse>(url, { params });
  return res.data;
};
