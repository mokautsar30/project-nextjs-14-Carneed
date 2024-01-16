import { getCollection } from "../config";
import { ObjectId } from "mongodb";
import bcryptjs from "bcryptjs";
import { z } from "zod";

export type User = {
  _id: ObjectId;
  name: string;
  username: string;
  email: string;
  password: string;
};

type NewUserInput = Omit<User, "_id">;

const UserInputSchema = z.object({
  name: z.string(),
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
});

class UserModel {
  static getCollection() {
    return getCollection("users");
  }
  static async findUsers() {
    return (await this.getCollection().find().toArray()) as User[];
  }
  static async CreateUser(newUser: NewUserInput) {
    const parseResult = UserInputSchema.safeParse(newUser);
    if (!parseResult.success) {
      // console.log(parseResult.error);
      throw parseResult.error;
    }

    const existingUser = await this.getCollection().findOne({
      $or: [{ username: newUser.username }, { email: newUser.email }],
    });

    if (existingUser) {
      throw new Error("Username or email already exists");
    }

    return await this.getCollection().insertOne({
      ...newUser,
      password: bcryptjs.hashSync(newUser.password),
    });
  }
  static async findUserById(id: string) {
    const objId = new ObjectId(id);
    return (await this.getCollection().findOne(
      {
        _id: objId,
      },
      { projection: { password: 0 } }
    )) as User | null;
  }
  static async findUserByUsername(username: string) {
    return (await this.getCollection().findOne({
      username: username,
    })) as User | null;
  }
}

export default UserModel;
