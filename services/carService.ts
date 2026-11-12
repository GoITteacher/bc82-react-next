import { server } from "./serverConfig";

interface Car {
  _id: string;
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
  mileage: number;
  fuelType: string;
  description: string;
}

interface GetCarsResponse {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  items: Car[];
}

export const getCars = async (params: any) => {
  const res = await server.get<GetCarsResponse>("/public/cars", { params });
  return res.data;
};

export const getCarById = async (id: string) => {
  const res = await server.get<Car>(`/public/cars/${id}`);
  return res.data;
};

export const deleteCar = async (id: string) => {
  const res = await server.delete<Car>(`/public/cars/${id}`);
  return res.data;
};
