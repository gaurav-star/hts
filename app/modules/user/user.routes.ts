import  {Request, Response, NextFunction, Router} from 'express';
import { ResponseHandler } from '../../utility/response-handler';
import userService from './user.service';

export const UserRouter = Router();

UserRouter.post("/signUp", async (req: Request, res: Response, next: NextFunction) => {
    try {
       const result= await userService.addUser(req.body);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})

UserRouter.post("/login", async (req: Request, res: Response, next: NextFunction) => {
    try {
       const result= await userService.userLogin(req.body);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})