import ProductModel from "@/db/models/products";

export async function GET(request: Request) {
  const data = await ProductModel.findProducts();

  return Response.json({
    data
  })
}




