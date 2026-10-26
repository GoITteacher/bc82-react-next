import { useState } from "react";
import { Car, getCars } from "../../services/cars";
import SearchForm from "../SearchForm/SearchForm";
import css from "./Cars.module.css";

const Cars = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSubmit = async (page: string) => {
    setIsLoading(true);
    setIsError(false);

    try {
      const result = await getCars(page);
      setCars(result.items);
    } catch {
      setIsError(true);
      setCars([]);
    }

    setIsLoading(false);
  };

  return (
    <div className={css["cars"]}>
      <SearchForm callback={onSubmit} />

      {isLoading && <p>Loading Cars ...</p>}
      {isError && <p>Server Error</p>}

      <ul>
        {cars.map((el) => {
          return <li key={el._id}>{el.model}</li>;
        })}
      </ul>
    </div>
  );
};

export default Cars;
