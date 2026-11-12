"use client";

import { useParams, useRouter } from "next/navigation";
import css from "./DeleteCarButton.module.css";
import { deleteCar } from "@/services/carService";

const DeleteCarButton = () => {
  const router = useRouter();
  const params = useParams<{ carId: string }>();
  const { carId } = params;

  const handleClick = async () => {
    await deleteCar(carId);
    router.push("/cars");
  };

  return (
    <button onClick={handleClick} className={css["deleteCarButton"]}>
      Delete Car
    </button>
  );
};

export default DeleteCarButton;
