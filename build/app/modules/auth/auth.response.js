"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUTH_MESSAGE = void 0;
const auth_types_1 = require("./auth.types");
exports.AUTH_MESSAGE = {
    INVALID_CREDENTIALS: new auth_types_1.AuthResponses(401, "INVALID CREDENTIALS"),
    USER_NOT_FOUND: new auth_types_1.AuthResponses(404, "USER NOT FOUND"),
    USER_ALREADY_EXIST: new auth_types_1.AuthResponses(409, "USER ALREADY EXISTS PLEASE LOGIN WITH YOUR CREDENTIALS"),
    USER_ADDED_SUCCESSFULLY: new auth_types_1.AuthResponses(201, "USER ADDED SUCCESSFULLY"),
    USER_LOGGED_IN: new auth_types_1.AuthResponses(201, "USER LOGGED-IN SUCCESSFULLY"),
};
//# sourceMappingURL=auth.response.js.map