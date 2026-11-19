import { NextResponse } from "next/server";
import { globalServer } from "../../serverConfig";
import { cookies } from "next/headers";

export const GET = async () => {
  const cookieStorage = await cookies();

  const res = await globalServer("/auth/me", {
    headers: {
      Cookie: cookieStorage.toString(),
    },
  });

  return NextResponse.json(res.data);
};
