import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { serverRefresh } from "./lib/serverApi";
import { parseCookie } from "cookie";

const privateRoutes = ["/tasks", "/news", "/notes"];

export const proxy = async (req: NextRequest) => {
  const path = req.nextUrl.pathname;
  const isPrivateRoute = privateRoutes.includes(path);

  if (!isPrivateRoute) {
    return NextResponse.next();
  }

  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken");
  const refreshToken = cookieStore.get("refreshToken");

  if (accessToken) {
    return NextResponse.next();
  }

  // if (refreshToken) {
  //   const res = await serverRefresh();
  //   const setCookies = res.headers["set-cookie"];

  //   if (setCookies) {
  //     const cookieArr = Array.isArray(setCookies) ? setCookies : [setCookies];

  //     for (const cookie of cookieArr) {
  //       const parsedCookie = parseCookie(cookie);

  //       const options = {
  //         expires: parsedCookie.Expires
  //           ? new Date(parsedCookie.Expires)
  //           : undefined,
  //         path: parsedCookie.Path,
  //         maxAge: Number(parsedCookie["Max-Age"]),
  //       };

  //       if (parsedCookie.accessToken) {
  //         cookieStore.set("accessToken", parsedCookie.accessToken, options);
  //       }

  //       if (parsedCookie.refreshToken) {
  //         cookieStore.set("refreshToken", parsedCookie.refreshToken, options);
  //       }
  //     }

  //     return NextResponse.next({
  //       headers: {
  //         Cookie: cookieStore.toString(),
  //       },
  //     });
  //   }
  // }

  return NextResponse.redirect(new URL("/sign-in", req.nextUrl.origin));
};

export const config = {
  matcher: ["/tasks/:path*", "/news/:path*", "/notes/:path*"],
};
