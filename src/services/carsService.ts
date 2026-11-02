import {
  Car,
  CreateCarBody,
  GetCarsParams,
  GetCarsResponse,
} from "../types/cars";
import { serverAPI } from "./serverConfig";

export const getCars = async (params: GetCarsParams) => {
  const res = await serverAPI.get<GetCarsResponse>("/public/cars", { params });
  return res.data;
};

export const createCar = async (body: CreateCarBody) => {
  const res = await serverAPI.post<Car>("/public/cars", body);
  return res.data;
};

export const updateCar = async (carId: string, body: CreateCarBody) => {
  const res = await serverAPI.put<Car>(`/public/cars/${carId}`, body);
  return res.data;
};

export const deleteCar = async (carId: string) => {
  return serverAPI.delete<null>(`/public/cars/${carId}`);
};
