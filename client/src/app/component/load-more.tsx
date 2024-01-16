"use client";

import { Product } from "@/db/models/products";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Spinner } from "./spinner";
import { fetchProducts } from "@/actions/product";
import ListProduct from "./ListProduct";
import ProductPage from "../product/page";

export function LoadMore() {
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  //page loaded
  const [pagesLoaded, setPageLoadeds] = useState(1);
  const [loading, setLoading] = useState(false);
  const { ref, inView } = useInView();

  const loadMoreProducts = async () => {
    if (loading) return; 

    setLoading(true);

    try {
      const nextPage = pagesLoaded + 1;
      const perPage = 3;
      const newProducts = await fetchProducts(nextPage, perPage);

      await new Promise((resolve) => setTimeout(resolve, 300));


      setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      const startIndex = (nextPage - 1) * perPage;
      const endIndex = startIndex + perPage;
      const newVisibleProducts = newProducts.slice(startIndex, endIndex);

      setVisibleProducts((prevVisibleProducts) => [
        ...prevVisibleProducts,
        ...newVisibleProducts,
      ]);
      setPageLoadeds(nextPage);
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inView) {
      console.log("scroll to end");
      loadMoreProducts();
    }
  }, [inView]);

  return (
    <div className="mx-auto my-10 grid max-w-screen-xl gap-y-8 sm:grid-cols-1 lg:grid-cols-3">
      
      {visibleProducts.map((product) => (
        <ListProduct key={product._id.toString()} product={product} />
      ))}

      
      {loading && (
        <div className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3">
          <Spinner />
        </div>
      )}
      <div ref={ref}></div>
    </div>
  );
}
