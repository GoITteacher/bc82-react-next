import { useState } from "react";
import { getMovies, Movie } from "../../services/movies";
import SearchForm from "../SearchForm/SearchForm";
import css from "./Movies.module.css";

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const onSubmit = async (title: string) => {
    const result = await getMovies(title);
    setMovies(result.items);
  };

  return (
    <div className={css["movies"]}>
      <SearchForm callback={onSubmit} />

      <ul>
        {movies.map((el) => {
          return <li key={el._id}>{el.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Movies;
