import { cookies } from "next/headers";
import { nextApi } from "./nextApi";

export const checkServerSession = async () => {
  const cookieStore = await cookies();

  const res = await nextApi.get("/auth/session", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  return res;
};
