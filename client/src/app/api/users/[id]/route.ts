import { MyResponse } from "@/app/types/response";
import UserModel, { User } from "@/db/models/user";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const data = await UserModel.findUserById(params.id);

  return NextResponse.json<MyResponse<User>>({
    data,
  });
}
