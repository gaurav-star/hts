"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const auth_routes_1 = require("../auth/auth.routes");
const routes_types_1 = require("./routes.types");
exports.routes = [
    new routes_types_1.Route("/auth", auth_routes_1.AuthRouter)
];
//# sourceMappingURL=routes.data.js.map