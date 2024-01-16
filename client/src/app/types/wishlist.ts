import { ObjectId } from "mongodb"


export type Wishlist = {
    _id: ObjectId,
    userId: ObjectId,
    productId: ObjectId,
    createdAt: Date,
    updatedAt: Date
}

export type newWishlist = Omit<Wishlist, "_id">