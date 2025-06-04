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
  {
    name: "Forget-Password",
    key: "forget-password",
    path: "/forget-password",
    component: lazy(() => import("../../pages/auth/Forget-Password")),
  },
   {
    name: "Reset-Password",
    key: "reset-password",
    path: "/reset-password",
    component: lazy(() => import("../../pages/auth/Reset-Password")),
  },
];

export const publicRouteNames = publicRoutes.map((route) => route.name);

export const publicRoutePaths = publicRoutes.map((route) => route.path);

export default publicRoutes;
