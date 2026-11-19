import { proxyServer } from "./serverConfig";

export const getSongs = async () => {
  const res = await proxyServer.get("/public/songs");
  return res.data;
};
