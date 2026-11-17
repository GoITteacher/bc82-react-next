import { create } from "zustand";

interface CarStore {
  cars: string[];
  addCar: (car: string) => void;
  clearCars: () => void;
}

const useCarStore = create<CarStore>((setStore) => {
  return {
    cars: [],

    addCar: (car) => {
      setStore((store) => {
        return { cars: [...store.cars, car] };
      });
    },

    clearCars: () => {
      setStore(() => {
        return { cars: [] };
      });
    },
  };
});
