import { formatRupiah } from "@/db/helpers/formatRupiah";
import { Product } from "@/db/models/products";
import Link from "next/link";

async function getDataById(slug: string): Promise<Product> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch data. Status: ${res.status}`);
    }

    const data = await res.json();

    if (!data) {
      throw new Error("Empty response received");
    }

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to be caught by the component
  }
}

export default async function CarDetail({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const data = await getDataById(params.slug);
  console.log(data, "ini data dari slug");

  return (
    <div className="mx-auto  bg-black p-8 text-white md:flex md:items-center md:justify-around md:p-20 lg:rounded-xl">
      <div className="">
        <div className="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-black shadow-md">
          <a
            className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
            href="#"
          >
            <img
              className="peer absolute top-0 right-0 h-full w-full object-cover"
              src={data.data.images[0]}
              alt="product-1"
            />
            <img
              className="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0"
              src={data.data.images[1]}
              alt="product-2"
            />
            {/* <img
            className="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0"
            src={data.data.images[2]}
            alt="product-3"
          /> */}
          </a>
          <div className="mt-4 px-5 pb-5">
            <h5 className="group-hover:text-green-500 mb-4 text-xl font-bold text-white">
              {data.data.name}
            </h5>
            <p className="mb-3 text-white font-bold">{data.data.excerpt}</p>
            <p className="mb-8 text-white">{data.data.description}</p>
            <div className="mt-2 mb-5 flex items-center justify-between">
              <p>
                <span className="text-3xl font-bold text-white">
                {formatRupiah(data.data.price)}
                </span>
              </p>
            </div>

            <div className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
              <Link
                href="#"
                className="group text-lg font-bold focus:text-green-400 hover:text-green-500 text-gray-400"
              >
                Buy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
