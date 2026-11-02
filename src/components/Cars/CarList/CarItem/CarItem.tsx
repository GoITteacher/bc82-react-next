import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Car } from "../../../../types/cars";
import css from "./CarItem.module.css";
import { Flex } from "antd";
import { deleteCar } from "../../../../services/carsService";

interface CarItemProps {
  carElem: Car;
}

const CarItem = ({ carElem }: CarItemProps) => {
  const queryClient = useQueryClient();

  const carMutation = useMutation({
    mutationKey: ["delete-car"],
    mutationFn: () => deleteCar(carElem._id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cars"],
      });
    },
  });

  const handleDelete = () => {};

  return (
    <li className={css["car-item"]}>
      <Flex gap="large">
        <p>{carElem._id}</p>
        <p>
          {carElem.make} - {carElem.model}
        </p>
        <p>{carElem.price}</p>
        <p>{carElem.year}</p>
        <p>{carElem.color}</p>
      </Flex>
      <Flex gap="small">
        <button className={css["sell-btn"]}>Продати</button>
        <button className={css["remove-btn"]} onClick={handleDelete}>
          Видалити
        </button>
      </Flex>
    </li>
  );
};

export default CarItem;
