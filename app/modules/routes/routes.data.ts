import { AuthRouter } from "../auth/auth.routes";
import { Route, Routes } from "./routes.types";

export const routes: Routes = [
    new Route("/auth", AuthRouter)
];

