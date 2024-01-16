"use client";

export default function Footer() {
  return (
    <div className="relative mt-20 bg-black px-4 pt-20 items-center">
      <nav
        aria-label="Footer Navigation"
        className="mx-auto mb-10 flex max-w-lg flex-col gap-10 text-center sm:flex-row sm:text-left"
      >
        <a href="#" className="font-medium text-white">
          About
        </a>
        <a href="#" className="font-medium text-white">
          Contact Us
        </a>
        <a href="#" className="font-medium text-white">
          Privacy Policy
        </a>
        <a href="#" className="font-medium text-white">
          Terms & Conditions
        </a>
      </nav>
      <p className="py-10 text-center text-gray-300">
        © 2024 Carneed | All Rights Reserved
      </p>
    </div>
  );
}
