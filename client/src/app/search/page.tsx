"use client";
import { Product } from "@/db/models/products";
import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import Link from "next/link";
import ListProduct from "../component/ListProduct";

export default function Search() {
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const debouncedSearchTerm = useDebounce(search, 400);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (debouncedSearchTerm) {
        setLoading(true);
        try {
          // Replace the URL with your actual endpoint for fetching suggestions
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/search?search=${debouncedSearchTerm}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch suggestions");
          }
          const data = await response.json();
          console.log(data);

          setSuggestions(data);
        } catch (error) {
          console.error("Error fetching suggestions:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [debouncedSearchTerm]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  return (
    <>
    <div className="mx-auto mt-5 w-screen max-w-screen-md py-20 leading-6">
      <div className="mx-auto mt-5 w-screen max-w-screen-md py-20 leading-6">
        <form className="relative mx-auto flex w-full max-w-2xl items-center justify-between rounded-md border shadow-lg">
          <input
            type="text"
            name="search"
            className="h-14 w-full rounded-md py-4 pr-40 pl-12 outline-none focus:ring-2 text-black"
            placeholder="Search Cars"
            value={search}
            onChange={handleChange}
          />
        </form>
      </div>
      
    </div>
    <div className="mx-auto my-10 grid max-w-screen-xl gap-y-8 sm:grid-cols-1 lg:grid-cols-3">
      {suggestions &&
        suggestions.map((product, i) => <ListProduct key={i} product={product} />)}
    </div>
    </>
  );
}
