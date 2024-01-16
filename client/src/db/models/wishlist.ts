import { newWishlist } from "@/app/types/wishlist";
import { getCollection } from "../config";
import { ObjectId } from "mongodb";

  class WishlistModel {
    static getCollection() {
        return getCollection("wishlists")
    }
    static async addWishList(userId: any, productId:string) {
      const dataWishlist: newWishlist = {
        userId: new ObjectId(userId),
        productId: new ObjectId(productId),
        createdAt: new Date(),
        updatedAt: new Date()
      }
      await this.getCollection().insertOne(dataWishlist)
      return dataWishlist
    }
  }


  export default WishlistModel