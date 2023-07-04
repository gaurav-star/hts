import UserModel from "./user.schema";
import { IUserSignUp } from "./user.types";

const addUser = async (user: IUserSignUp) => {
  try {
    return await UserModel.create(user);
  } catch (e) {
    throw e;
  }
};

const getUser = async (email: string) => {
  try {
    return await UserModel.findOne({ email });
  } catch (e) {
    throw e;
  }
};

export default {
  getUser,
  addUser,
};
