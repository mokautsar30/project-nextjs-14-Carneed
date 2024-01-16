import { MyResponse } from "@/app/types/response";
import ProductModel, { Product } from "@/db/models/products";
import { NextRequest, NextResponse } from "next/server";


export async function GET(
    request: NextRequest,
    { params }: { params: { slug: string } }
  ) {
    const data = await ProductModel.findProductBySlug(params.slug);
  
    return NextResponse.json<MyResponse<Product>>({
      data
    });
  }