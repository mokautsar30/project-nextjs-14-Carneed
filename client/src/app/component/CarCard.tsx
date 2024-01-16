import { formatRupiah } from "@/db/helpers/formatRupiah";
import { Product } from "@/db/models/products";
import Image from "next/image";
import Link from "next/link";


//use client

export default function CarCard({ product }: { product: Product }) {
  return (
    <div className="group cursor mx-4 overflow-hidden rounded-2xl bg-black shadow-xl duration-200 hover:-translate-y-4">
      <div className="flex h-60 flex-col justify-between overflow-hidden">
        <Image
          src={product.thumbnail}
          className="group-hover:scale-110 h-full w-full object-cover duration-200"
          width={500}
          height={500}
          priority={true}
          alt="Video Thumbnail-5"
        />
      </div>
      <div className="flex-1 overflow-hidden bg-black px-10 py-8">
        <h5 className="group-hover:text-green-500 mb-4 text-xl font-bold text-white">
          {product.name}
        </h5>
        <p className="mb-8 text-white">{product.excerpt}</p>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-xl font-bold text-white">
            {formatRupiah(product.price)}
            </span>
          </p>
        </div>
        <div className="flex justify-between">
          <Link
            href={`/product/${product.slug}`}
            className="group text-lg font-bold focus:text-green-400 hover:text-green-500 text-gray-400"
          >
            Detail
          </Link>
          <div className="max-w-full flex-none lg:px-4 text-lg font-bold focus:text-green-500 hover:text-green-600 text-gray-400">
            <Link href="/wishlist">Wishlist</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
