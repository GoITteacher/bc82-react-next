import CarList from "./CarList/CarList";
import css from "./Cars.module.css";
import { Flex } from "antd";
import FormCreateCar from "./FormCreateCar/FormCreateCar";
import FormUpdateCar from "./FormUpdateCar/FormUpdateCar";
import { useState } from "react";

const Cars = () => {
  const [page, setPage] = useState(0);

  return (
    <div className={css["container"]}>
      <Flex justify="space-between">
        <FormCreateCar />
        <FormUpdateCar page={page} />
      </Flex>

      <CarList page={page} />
    </div>
  );
};

export default Cars;
