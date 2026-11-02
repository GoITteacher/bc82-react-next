import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCar } from "../../../services/carsService";
import { CreateCarBody } from "../../../types/cars";
import css from "./FormCreateCar.module.css";

const FormCreateCar = () => {
  const queryClient = useQueryClient();

  const carMutation = useMutation({
    mutationKey: ["create-car"],
    mutationFn: (carData: CreateCarBody) => createCar(carData),
    onError: () => {},
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cars"],
      });
    },
  });

  const handleSubmit = (formData: FormData) => {
    const carData: CreateCarBody = {
      model: formData.get("model") as string,
      make: formData.get("make") as string,
      year: Number(formData.get("year")),
      color: formData.get("color") as string,
      price: Number(formData.get("price")),
      mileage: Number(formData.get("mileage")),
      fuelType: formData.get("fuelType") as string,
      description: formData.get("description") as string,
    };

    carMutation.mutate(carData);
  };

  return (
    <form className={css["create-form"]} action={handleSubmit}>
      <input type="text" name="model" placeholder="model" />
      <input type="text" name="make" placeholder="make" />
      <input type="number" name="year" placeholder="year" />
      <input type="color" name="color" placeholder="color" />
      <input type="number" name="price" placeholder="price" />
      <input type="number" name="mileage" placeholder="mileage" />
      <input type="text" name="fuelType" placeholder="fuelType" />
      <input type="text" name="description" placeholder="description" />
      <button type="submit">Додати Авто</button>
    </form>
  );
};

export default FormCreateCar;
