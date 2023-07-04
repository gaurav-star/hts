"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const password_1 = require("../../utility/password");
const user_service_1 = __importDefault(require("../user/user.service"));
const auth_response_1 = require("./auth.response");
const signup = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password: userPassword } = user;
        if (yield user_service_1.default.getUser(email)) {
            return auth_response_1.AUTH_MESSAGE.USER_ALREADY_EXIST;
        }
        user.password = (0, password_1.createHash)(userPassword);
        yield user_service_1.default.addUser(user);
        return auth_response_1.AUTH_MESSAGE.USER_ADDED_SUCCESSFULLY;
    }
    catch (e) {
        throw e;
    }
});
const userLogin = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userDetails = yield user_service_1.default.getUser(user.email);
        if (!userDetails) {
            return auth_response_1.AUTH_MESSAGE.USER_NOT_FOUND;
        }
        const password = (userDetails === null || userDetails === void 0 ? void 0 : userDetails.password) || "";
        const result = (0, password_1.comparePassword)(user.password, password);
        if (!result) {
            return auth_response_1.AUTH_MESSAGE.INVALID_CREDENTIALS;
        }
        return auth_response_1.AUTH_MESSAGE.USER_LOGGED_IN;
    }
    catch (e) {
        throw e;
    }
});
exports.default = {
    signup,
    userLogin,
};
//# sourceMappingURL=auth.service.js.map