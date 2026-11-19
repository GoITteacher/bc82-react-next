import { proxyServer } from "./serverConfig";

export const register = async () => {};

interface LoginBody {
  email: string;
  password: string;
}
export const login = async (data: LoginBody) => {
  const res = await proxyServer.post("/auth/login", data);
  return res.data;
};

export const refresh = async () => {
  const res = await proxyServer.post("/auth/refresh", null);
  return res.data;
};

export const logout = async () => {};

export const getMe = async () => {
  const res = await proxyServer.get("/auth/me");
  return res.data;
};
