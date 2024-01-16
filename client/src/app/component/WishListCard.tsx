'use client'

import Image from "next/image";
import Link from "next/link";
import ButtonRemove from "./ButtonRemove";
import { useEffect, useState } from "react";
import { Wishlist } from "../types/wishlist";


//use client

export default function WishlistCard() {
  const [data, setData] = useState<Wishlist[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);


      try {
        const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/wishlist", {
          method: "GET",
          headers: {
            // Authorization: `Bearer ${token}`,
          },
          cache: "no-store",
        });
        if(!response.ok) {
          throw new Error("fetch data failed")
        }
        const newData: {data:Wishlist[]} = await response.json()
        setData(newData.data)
      } catch (error) {
        console.log(error);
        
      }
    };
  });

  return (
    <div className="mx-auto my-10 grid max-w-screen-xl gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
      <div className="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-black shadow-md">
        <a
          className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
          href="#"
        >
          <img
            className="peer absolute top-0 right-0 h-full w-full object-cover"
            src="https://www.mad4wheels.com/img/free-car-images/mobile/20789/hyundai-ioniq-5-n-usa-version-2025-745659.jpg"
            alt="product image"
          />
          <img
            className="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0"
            src="https://www.mad4wheels.com/img/free-car-images/mobile/20789/hyundai-ioniq-5-n-usa-version-2025-745630.jpg"
            alt="product image"
          />
        </a>
        <div className="mt-4 px-5 pb-5">
          <h5 className="group-hover:text-green-500 mb-4 text-xl font-bold text-white">
            name
          </h5>
          <p className="mb-3 text-white font-bold">excerpt</p>
          <p className="mb-8 text-white">
            Cras ultricies ligula sed magna dictum porta. Praesent sapien massa,
            convallis a pellentesque nec, egestas non nisi.
          </p>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-white">$111</span>
            </p>
          </div>

          <div className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
            <Link
              href="/product/detail"
              className="group text-lg font-bold focus:text-green-400 hover:text-green-500 text-gray-400"
            >
              Detail
            </Link>
            <ButtonRemove />
          </div>
        </div>
      </div>
    </div>
  );
}
