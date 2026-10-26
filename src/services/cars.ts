import axios from "axios";

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

  const url =
    "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com/public/cars";

  const res = await axios.get<GetCarsResponse>(url, { params });
  return res.data;
};
