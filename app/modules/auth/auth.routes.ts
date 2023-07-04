import  {Request, Response, NextFunction, Router} from 'express';
import { ResponseHandler } from '../../utility/response-handler';
import authService from './auth.service';
import { LoginValidator, SignupValidator } from './auth.validation';

export const AuthRouter = Router();

AuthRouter.post("/signUp",SignupValidator, async (req: Request, res: Response, next: NextFunction) => {
    try {
       const result= await authService.signup(req.body);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})

AuthRouter.post("/login", LoginValidator,async (req: Request, res: Response, next: NextFunction) => {
    try {
       const result= await authService.userLogin(req.body);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
})