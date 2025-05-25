import { lazy } from "react";

import { PATHS } from "../../constants/page-paths";

export const publicRoutes = [
  {
    name: "Login",
    key: "login",
    path: "/login",
    component: lazy(() => import("../../pages/auth/Login")),
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
