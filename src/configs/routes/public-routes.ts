// src/configs/routes/public-routes.ts
import { lazy } from "react";

export const publicRoutes = [
  {
    name: "Login",
    key: "login",
    path: "/login",
    component: lazy(() => import("@/pages/auth/Login/index")),
  },
  {
    name: "Signup",
    key: "signup",
    path: "/signup",
    component: lazy(() => import("../../pages/auth/Signup")),
  },
];

export const publicRouteNames = publicRoutes.map((route) => route.name);
export const publicRoutePaths = publicRoutes.map((route) => route.path);

export default publicRoutes;
