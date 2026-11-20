import { NextRequest, NextResponse } from "next/server";
import { globalApi } from "../globalApi";

export const POST = async (request: NextRequest) => {
  const payload = await request.json();
  const res = await globalApi.post("/tasks", payload);

  return NextResponse.json(res.data, {
    status: res.status,
  });
};
