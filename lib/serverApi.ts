import { cookies } from "next/headers";
import { nextApi } from "./nextApi";

export const serverRefresh = async () => {
  const cookieStore = await cookies();

  const res = await nextApi.post("/auth/refresh", null, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  return res;
};
