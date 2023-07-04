import userRepo from "./user.repo";
import { IUserLogin, IUserSignUp } from "./user.types";

const addUser = async (user: IUserSignUp) => {
  try {
    if(await userRepo.getUser(user.email))
    {
        return "user already exists"
    }
    await userRepo.addUser(user);
    return "new user added successfully"
  } catch (e) {
    throw e;
  }
};

const userLogin = async (user: IUserLogin) => {
    try {
      const userDetails= await userRepo.getUser(user.email)
      if(!userDetails)
      {
        return "user not find"
      }
      const password= userDetails?.password || ""
      if(password!==user.password)
      {
        return "invalid credentials"
      }
        return "login successfully"
    } catch (e) {
      throw e;
    }
  };

  const getUser = async (email: string) => {
    try {
     return await userRepo.getUser(email)
    } catch (e) {
      throw e;
    }
  };



export default {
  addUser,
  userLogin,
  getUser
};
