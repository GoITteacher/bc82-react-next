import { useQuery } from "@tanstack/react-query";
import CarItem from "./CarItem/CarItem";
import css from "./CarList.module.css";
import { getCars } from "../../../services/carsService";
import { useState } from "react";

const CarList = ({ page }: { page: number }) => {
  const { data } = useQuery({
    queryKey: ["cars", page],
    queryFn: () => getCars({}),
    staleTime: 5000,
  });

  const cars = data?.items || [];

  return (
    <ul className={css["car-list"]}>
      {cars.map((el) => {
        return <CarItem key={el._id} carElem={el} />;
      })}
    </ul>
  );
};

export default CarList;
