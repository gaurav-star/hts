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
const user_repo_1 = __importDefault(require("./user.repo"));
const addUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (yield user_repo_1.default.getUser(user.email)) {
            return "user already exists";
        }
        yield user_repo_1.default.addUser(user);
        return "new user added successfully";
    }
    catch (e) {
        throw e;
    }
});
const userLogin = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userDetails = yield user_repo_1.default.getUser(user.email);
        if (!userDetails) {
            return "user not find";
        }
        const password = (userDetails === null || userDetails === void 0 ? void 0 : userDetails.password) || "";
        if (password !== user.password) {
            return "invalid credentials";
        }
        return "login successfully";
    }
    catch (e) {
        throw e;
    }
});
const getUser = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield user_repo_1.default.getUser(email);
    }
    catch (e) {
        throw e;
    }
});
exports.default = {
    addUser,
    userLogin,
    getUser
};
//# sourceMappingURL=user.service.js.map