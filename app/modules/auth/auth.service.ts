import {
  comparePassword,
  createHash,
} from "../../utility/password";
import userService from "../user/user.service";
import { AUTH_MESSAGE } from "./auth.response";
import { IUserLogin, IUserSignUp } from "./auth.types";

const signup = async (user: IUserSignUp) => {
  try {
    const { email, password: userPassword } = user;
    if (await userService.getUser(email)) {
      return AUTH_MESSAGE.USER_ALREADY_EXIST;
    }
    user.password = createHash(userPassword);
    await userService.addUser(user);
    return AUTH_MESSAGE.USER_ADDED_SUCCESSFULLY;
  } catch (e) {
    throw e;
  }
};

const userLogin = async (user: IUserLogin) => {
  try {
    const userDetails = await userService.getUser(user.email);
    if (!userDetails) {
      return AUTH_MESSAGE.USER_NOT_FOUND
    }
    const password = userDetails?.password || "";
    const result = comparePassword(user.password, password);
    if (!result) {
      return AUTH_MESSAGE.INVALID_CREDENTIALS;
    }
    return AUTH_MESSAGE.USER_LOGGED_IN;
  } catch (e) {
    throw e;
  }
};

export default {
  signup,
  userLogin,
};
