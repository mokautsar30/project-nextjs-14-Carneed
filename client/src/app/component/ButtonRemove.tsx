'use client'

export default function ButtonRemove() {
    return (
        <div className="max-w-full flex-none lg:px-4 text-lg font-bold focus:text-red-500 hover:text-red-600 text-gray-400">
        <button onClick={() => {
          console.log("remove di hit");
          
        }}>Remove</button>
      </div>
    )
}