import { body } from "express-validator";
import { validate } from "../../utility/validate";

export const SignupValidator = [
    body('first_name').isString().notEmpty().withMessage("first name is required"),
    body('last_name').isString().notEmpty().withMessage("last name is required"),
    body('password').isString().notEmpty().isLength({ min: 6 }).withMessage("password length should be greater than 6 character"),
    body('email').isEmail().withMessage('email is required'),
    validate
]

export const LoginValidator = [
    body('password').isString().notEmpty().withMessage("password is required"),
    body('email').isEmail().withMessage('email is required'),
    validate
]