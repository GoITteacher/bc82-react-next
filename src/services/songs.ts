import { GetSongsParams, GetSongsResponse } from "../types/songs";
import { serverApi } from "./serverConfig";

export const getSongs = async (params: GetSongsParams) => {
  const res = await serverApi.get<GetSongsResponse>("/public/songs", {
    params,
  });
  return res.data;
};

export const getSongById = async () => {};
export const createSong = async () => {};
export const resetSong = async () => {};
export const deleteSong = async () => {};
