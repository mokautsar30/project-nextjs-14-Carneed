import { getCollection } from "../config";
import { ObjectId } from "mongodb";
import bcryptjs from "bcryptjs";
import { z } from "zod";

export type Product = {
  data: any;
  _id: ObjectId;
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
};

class ProductModel {
  static getCollection() {
    return getCollection("Products");
  }
  static async findProducts() {
    return await this.getCollection().find().toArray();
  }
  static async findProductBySlug(slug: string): Promise<Product | null> {
    const result = await this.getCollection().findOne({ slug: slug });
    return result !== null ? (result as Product) : null;
  }
  static async findProductByName(search: string) {
    const findProduct = await this.getCollection().find({
      name: { $regex: new RegExp(search, "i") },
    }).toArray();
    return findProduct;
  }
}

export default ProductModel;
