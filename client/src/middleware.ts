import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import * as jose from "jose";
import { ObjectId } from 'mongodb'

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  if (request.nextUrl.pathname.startsWith("/product")) {
    let cookie = request.cookies.get("Authorization");
    let username = request.cookies.get("sername")
    console.log(username, "ini username middleware");
    // console.log(cookie, "ini cookie");
    if (!cookie) {
      // Handle the case where the Authorization cookie is not set (user not logged in)
      return response;
    }

    let token = cookie.value.split(" ")[1] as string;
    const secret = new TextEncoder().encode(process.env.JWT_SECRET as string);

    try {
      const data = await jose.jwtVerify<{
        _id: string;
        username: string;
      }>(token, secret);

      // console.log("Username from token:", data.payload.username);

      const requestHeaders = new Headers(request.headers);
      requestHeaders.set("x-user-id", data.payload._id);
      requestHeaders.set("x-user-username", data.payload.username);

      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    } catch (error) {
      console.log("error ini");
      return NextResponse.json(
        {
          message: "invalid token",
        },
        {
          status: 401,
        }
      );
    }
  }

  if (request.nextUrl.pathname.startsWith("/wishlist")) {
    let cookie = request.cookies.get("Authorization");
    let token = cookie?.value.split(" ")[1] as string;
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET as string);

    try {
      const data = await jose.jwtVerify<{
        _id: string;
        username: string;
      }>(token, secret);

      console.log("User ID from token:", data.payload._id);

      const requestHeaders = new Headers(request.headers);
      requestHeaders.set("x-user-id", data.payload._id);
      requestHeaders.set("x-user-username", data.payload.username);

      const response = NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
      return response;
      // console.log(data);
    } catch (error) {
      console.log("error ini");
      return NextResponse.json(
        {
          message: "invalid token",
        },
        {
          status: 401,
        }
      );
    }
  }
  return response;
}
