import { NextRequest, NextResponse } from "next/server";
import { globalServer } from "../../serverConfig";
import * as cookie from "cookie";
import { cookies } from "next/headers";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const res = await globalServer.post("/auth/login", body);

  const cookieStorage = await cookies();
  const cookieArr = res.headers["set-cookie"];

  if (cookieArr) {
    for (const cookieStr of cookieArr) {
      const cookieObj = cookie.parseCookie(cookieStr);

      const options = {
        maxAge: Number(cookieObj["Max-Age"]),
        path: cookieObj.Path,
        expires: cookieObj.Expires ? new Date(cookieObj.Expires) : undefined,
      };

      if (cookieObj.refreshToken) {
        cookieStorage.set("refreshToken", cookieObj.refreshToken, options);
      }

      if (cookieObj.accessToken) {
        cookieStorage.set("accessToken", cookieObj.accessToken, options);
      }
    }
  }

  return NextResponse.json(res.data);
};
