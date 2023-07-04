"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginValidator = exports.SignupValidator = void 0;
const express_validator_1 = require("express-validator");
const validate_1 = require("../../utility/validate");
exports.SignupValidator = [
    (0, express_validator_1.body)('first_name').isString().notEmpty().withMessage("first name is required"),
    (0, express_validator_1.body)('last_name').isString().notEmpty().withMessage("last name is required"),
    (0, express_validator_1.body)('password').isString().notEmpty().isLength({ min: 6 }).withMessage("password length should be greater than 6 character"),
    (0, express_validator_1.body)('email').isEmail().withMessage('email is required'),
    validate_1.validate
];
exports.LoginValidator = [
    (0, express_validator_1.body)('password').isString().notEmpty().withMessage("password is required"),
    (0, express_validator_1.body)('email').isEmail().withMessage('email is required'),
    validate_1.validate
];
//# sourceMappingURL=auth.validation.js.map