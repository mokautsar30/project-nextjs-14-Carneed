import ProductModel from "@/db/models/products";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params: {} }) {
  let search: string | null = request.nextUrl.searchParams.get("search");

  if (search) {
    const data = await ProductModel.findProductByName(search);
    console.log(data);
    
    return NextResponse.json(data, { status: 200 });
  }
}
