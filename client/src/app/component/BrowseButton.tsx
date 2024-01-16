export default function BrowseButton() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="inline-flex h-12 w-40 items-center justify-center rounded-full bg-green-600 px-6 font-medium tracking-wide text-white shadow-md outline-none transition duration-200 hover:bg-green-400 focus:ring sm:w-auto">
        <a href="/product" className="group flex items-center justify-center rounded py-1 text-center font-bold">
          Continue
        </a>
        <svg
          className="flex-0 ml-4 h-6 w-6 transition-all group-hover:ml-8"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </div>
  );
}

//use client
