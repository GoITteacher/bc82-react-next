import { cookies } from "next/headers";
import { globalServer } from "../../serverConfig";
import { NextResponse } from "next/server";
import * as cookie from "cookie";

export const POST = async () => {
  const cookieStorage = await cookies();

  if (cookieStorage.get("accessToken")) {
    return NextResponse.json({ success: true });
  }

  if (!cookieStorage.get("refreshToken")) {
    return NextResponse.json({ success: false });
  }

  const res = await globalServer.post("/auth/refresh", null, {
    headers: {
      Cookie: cookieStorage.toString(),
    },
  });

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

  return NextResponse.json({ success: true });
};
