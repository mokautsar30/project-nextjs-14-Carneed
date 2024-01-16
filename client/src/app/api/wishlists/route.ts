import WishlistModel from "@/db/models/wishlist";
import { MyResponse } from "@/app/types/response";
import { Wishlist, newWishlist } from "@/app/types/wishlist";
import { NextRequest, NextResponse } from "next/server";

// export async function GET(request: NextRequest) {
//     const data = await WishlistModel.findWishlist();
//     return Response.json({
//       data
//     })
//   }

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const userId = request.headers.get("x-user-id");
    console.log(userId);
    await WishlistModel.addWishList(userId, body.productId);
    return NextResponse.json<MyResponse<newWishlist>>({
      message: "add wishlist",
    });
  } catch (error) {
    if (error) {
      return NextResponse.json<MyResponse<newWishlist>>(
        {
          error: "product have added to wishlist",
        },
        {
          status: 400,
        }
      );
    }
  }
  return NextResponse.json<MyResponse<newWishlist>>({
    error: "internal server error"
  }, {
    status: 500
  })
}
