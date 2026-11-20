import { AxiosError } from "axios";
import { cookies } from "next/headers";

export const getError = (err: unknown) => {
  const error = err as AxiosError<{ status: number; message: string }>;
  const response = error.response;

  const message = response?.data.message || error.message || "Server Error";
  const status = response?.data.status || error.status || 500;

  return { message, status };
};

export const getAuthHeaders = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return null;
  }

  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  return headers;
};
