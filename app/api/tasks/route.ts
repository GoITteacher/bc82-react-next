import { NextRequest, NextResponse } from "next/server";
import { globalApi } from "../globalApi";
import { getAuthHeaders, getError } from "../_helpers/requestHelpers";
import { cookies } from "next/headers";

export const POST = async (request: NextRequest) => {
  const authHeaders = await getAuthHeaders();

  try {
    const payload = await request.json();
    const res = await globalApi.post("/tasks", payload, {
      headers: { ...authHeaders },
    });

    return NextResponse.json(res.data, {
      status: res.status,
    });
  } catch (err) {
    const { message, status } = getError(err);
    return NextResponse.json({ message }, { status });
  }
};
