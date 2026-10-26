import axios from "axios";
import { serverApi } from "./serverConfig";

export interface Car {
  _id: string;
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
  mileage: number;
  fuelType: string;
  description: string;
  createdAt: string;
  updatedAt: string;
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

export const getCars = async (page: string) => {
  const params = {
    page: page,
    perPage: 3,
  };

  const res = await serverApi.get<GetCarsResponse>("/public/cars", { params });
  return res.data;
};
