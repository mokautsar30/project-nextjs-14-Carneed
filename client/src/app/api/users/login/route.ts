import UserModel from "@/db/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();
    const user = await UserModel.findUserByUsername(username);

    if (!user) {
      throw new Error("Invalid Username/password");
    }
    const validate = bcryptjs.compareSync(password, user.password)
    // console.log(validate);
    if(!validate) {
        throw new Error("Invalid Username/password");
    }
    
  
    const token = jwt.sign({username: user.username, _id: user._id}, process.env.JWT_SECRET as string)
    const responseHeaders = new Headers();
    console.log(request.headers.keys());
    console.log("user sedang login", request.headers.get("x-user-id"));
    console.log("user sedang login", request.headers.get("x-user-username"));
    
    return NextResponse.json(
      {
        message: "login success",
        access_token: token,
      },
      {
        status: 200,
        headers: responseHeaders
      }
    );
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "Invalid Username/password") {
        return NextResponse.json(
          {
            message: "Invalid Username/password",
          },
          {
            status: 400,
          }
        );
      }
    }
    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}
