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

export interface GetCarsParams {
  page?: number;
  perPage?: number;
  sortField?: string;
  sortOrder?: "asc" | "desc";
  make?: string;
  model?: string;
  color?: string;
  fuelType?: string;
  year?: number;
  price?: number;
}

export interface GetCarsResponse {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  items: Car[];
}

export interface CreateCarBody {
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
  mileage: number;
  fuelType: string;
  description: string;
}
