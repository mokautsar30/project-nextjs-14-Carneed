import Image from "next/image";

export default function Banner() {
  return (
    <div className="mx-auto max-w-screen-lg bg-black p-8 text-white md:flex md:items-center md:justify-around md:p-20 lg:rounded-xl">
      <div className="mr-10 mb-10 md:mb-0">
        <p className="text-gray-100">SAVE UP TO 50%</p>
        <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold sm:text-4xl">
          BEST CAR FOR YOU TO BUY
          <span className="inline-block text-green-400">
                TODAY!
              </span>
        </h2>
        <ul className="flex max-w-xl flex-wrap gap-4">
          <li className="flex space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6 text-green-300"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-gray-100">GET THE BEST PRICE HERE</p>
          </li>
          {/* Repeat  */}
        </ul>
      </div>
      <div className="whitespace-nowrap focus:outline-4 rounded-xl px-4 py-3 font-medium text-white shadow-md outline-white transition hover:bg-green-400">
        <Image
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="banner"
          width={800}
          height={800}
          className="object-contain rounded-lg"
          priority={true}
        />
      </div>
    </div>
  );
}
