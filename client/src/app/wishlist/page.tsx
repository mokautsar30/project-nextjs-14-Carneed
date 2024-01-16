import WishlistCard from "../component/WishListCard";
import { cookies } from "next/headers";

async function getWishlist() {
  const token = cookies().get("Authorization");
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/wishlist", {
    cache: "no-store"
  })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const result = await res.json();
  return result.data;
}

export default function Wishlist() {
    return (
      <div>
        <WishlistCard/>
      </div>
    )
  }