import { globalServer } from "@/app/api/serverConfig";
import { NextRequest } from "next/server";

interface RequestParams {
  params: Promise<{ songId: string }>;
}

export const GET = () => {};

export const PUT = async (req: NextRequest, { params }: RequestParams) => {
  const body = await req.json();
  const { songId } = await params;
  const res = await globalServer.put(`/public/songs/${songId}`, body);
  return res.data;
};

export const DELETE = () => {};
