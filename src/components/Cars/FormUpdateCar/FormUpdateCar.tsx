import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateCarBody } from "../../../types/cars";
import css from "./FormUpdateCar.module.css";
import { createCar, updateCar } from "../../../services/carsService";

interface CarMutationData {
  carId: string;
  body: CreateCarBody;
}

const FormUpdateCar = ({ page }: { page: number }) => {
  const queryClient = useQueryClient();

  const carMutation = useMutation({
    mutationKey: ["update-car"],
    mutationFn: ({ carId, body }: CarMutationData) => updateCar(carId, body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cars", page],
      });
    },
    onError: () => {
      alert("Упс... Щось пішло не так");
    },
  });

  const handleSubmit = (formData: FormData) => {
    const id = formData.get("id") as string;
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

    carMutation.mutate({ carId: id, body: carData });
  };

  return (
    <form className={css["update-form"]} action={handleSubmit}>
      <input type="text" name="id" placeholder="id" />
      <input type="text" name="model" placeholder="model" />
      <input type="text" name="make" placeholder="make" />
      <input type="number" name="year" placeholder="year" />
      <input type="color" name="color" placeholder="color" />
      <input type="number" name="price" placeholder="price" />
      <input type="number" name="mileage" placeholder="mileage" />
      <input
        type="text"
        name="fuelType"
        placeholder="fuelType"
        defaultValue={"gasoline"}
      />
      <input type="text" name="description" placeholder="description" />
      {!carMutation.isPending && <button type="submit">Оновити авто</button>}
    </form>
  );
};

export default FormUpdateCar;
