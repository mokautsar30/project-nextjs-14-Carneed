import ListProduct from "../component/ListProduct";
import { Product } from "@/db/models/products";
import { Spinner } from "../component/spinner";
import { LoadMore } from "../component/load-more";

async function getData(): Promise<{ data: Product[] }> {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/products");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const result = await res.json();
  return result.data;
}

export default async function ProductPage() {
  try {
    const data = await getData();

    return (
      <>
        <div className="mx-auto my-10 grid max-w-screen-xl gap-y-8 sm:grid-cols-1 lg:grid-cols-3">
          {Array.isArray(data) ? (
            data.slice(0, 6).map((product) => (
              <ListProduct key={product._id} product={product} />
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
        <LoadMore/>
      </>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <p>Error fetching data</p>;
  }
}
