import UserModel from "@/db/models/user";

export async function GET(request: Request) {
  const data = await UserModel.findUsers();
  console.log(request.headers.keys());
  console.log("user sedang login", request.headers.get("x-user-id"));
  console.log("user sedang login", request.headers.get("x-user-username"));
  return Response.json({
    data
  })
}
