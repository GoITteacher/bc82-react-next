import { NextResponse } from "next/server";

export const GET = () => {
  const date = new Date();
  return NextResponse.json({ date: date.toISOString() });
};
