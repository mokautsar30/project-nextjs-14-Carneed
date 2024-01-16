"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { handleLogout } from "@/actions/product";

export default function Navbar() {
  const pathname = usePathname();
  // console.log(pathname);

  return (
    <header className="text-slate-500 container relative mx-auto flex flex-col overflow-hidden px-4 py-4 lg:flex-row lg:items-center">
      <Link
        href="/"
        className="flex items-center whitespace-nowrap text-2xl font-black"
      >
        Carneed
      </Link>
      <input type="checkbox" className="peer hidden" id="navbar-open" />
      <label
        className="absolute top-5 right-5 cursor-pointer lg:hidden"
        htmlFor="navbar-open"
      >
        <svg
          className="h-7 w-7"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </label>
      <nav
        aria-label="Header Navigation"
        className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row"
      >
        <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
          <li className="lg:mr-12">
            <Link
              className={
                pathname === "/product"
                  ? "text-green-500 font-bold"
                  : "rounded text-gray-300 transition focus:outline-none focus:text-green-500"
              }
              href={"/product"}
            >
              Showroom
            </Link>
          </li>
          <li className="lg:mr-12">
            <Link
              className={
                pathname === "/wishlist"
                  ? "text-green-500 font-bold"
                  : "rounded text-gray-300 transition focus:outline-none focus:text-green-500"
              }
              href={"/wishlist"}
            >
              Wishlist
            </Link>
          </li>
          <li className="lg:mr-12">
            <a
              className="rounded text-gray-300 transition focus:outline-none focus:text-green-500"
              href="/search"
            >
              Search
            </a>
          </li>
        </ul>
        <hr className="mt-4 w-full lg:hidden" />
        <div className="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
          <form action={handleLogout}>
            <button
              type="submit"
              className="whitespace-nowrap rounded-xl bg-green-600 px-5 py-3 font-medium text-black transition-all duration-200 focus:outline-none  hover:bg-green-400"
            >
              Log Out
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
}
