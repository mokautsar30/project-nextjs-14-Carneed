import Image from "next/image";
import { Hero } from "./component";
import Banner from "./component/Banner";
import CarCard from "./component/CarCard";
import BrowseButton from "./component/BrowseButton";
import Footer from "./component/Footer";
import { Product } from "@/db/models/products";

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

export default async function Home() {
  try {
    const data = await getData();
    return (
      <main className="overflow-hidden">
        <Hero />
        <Banner />
        <div className="mx-auto my-10 grid max-w-screen-xl gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {data && Array.isArray(data) ? (
            data.slice(0,6).map((product) => (
              <CarCard key={product._id} product={product} />
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
        <BrowseButton />
        <Footer />
      </main>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <p>Error fetching data</p>;
  }
}
