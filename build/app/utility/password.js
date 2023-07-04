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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHash = exports.comparePassword = exports.createPassword = void 0;
const bcryptjs_1 = require("bcryptjs");
const createPassword = () => __awaiter(void 0, void 0, void 0, function* () {
    const alphaNumeric = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbols = "!@#$%^&**()";
    let password = '';
    for (let count = 0; count < 6; count++) {
        const shouldBeSymbol = Math.random() > 0.5;
        if (shouldBeSymbol) {
            const index = Math.floor(Math.random() * symbols.length);
            password += symbols[index];
            continue;
        }
        const index = Math.floor(Math.random() * alphaNumeric.length);
        password += alphaNumeric[index];
    }
    const hashedPassword = (0, exports.createHash)(password);
    return hashedPassword;
});
exports.createPassword = createPassword;
const comparePassword = (password, hashedPassword) => {
    return (0, bcryptjs_1.compareSync)(password, hashedPassword);
};
exports.comparePassword = comparePassword;
const createHash = (password) => {
    const salt = (0, bcryptjs_1.genSaltSync)();
    const hashedPassword = (0, bcryptjs_1.hashSync)(password, salt);
    return hashedPassword;
};
exports.createHash = createHash;
//# sourceMappingURL=password.js.map