import UserModel from "@/db/models/user";
import { ZodError } from "zod";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await UserModel.CreateUser(body);
    return Response.json({
      message: "Succesfully create user",
    });
  } catch (error) {
    // console.log(error);
    if(error instanceof ZodError) {
        const err = error.issues[0].path + ' ' + error.issues[0].message
        return Response.json(
            {
              error: err
            },
            {
              status: 400,
            }
          );
    }
    return Response.json(
      {
        error: 'Internal Server Error',
      },
      {
        status: 500,
      }
    );
  }
}
