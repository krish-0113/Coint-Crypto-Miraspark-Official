import { lazy } from "react";

export interface ProtectedRouteInterface {
  path: string;
  key: string;
  name: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
}

export const protectedRoutes = [
  {
    name: "Home",
    key: "home",
    path: "/",
    component: lazy(() => import("../../pages/home"))
  },
   {
    name: "About",
    key: "about",
    path: "/about",
    component: lazy(() => import("../../pages/about"))
  },
  {
    name: "Currency",
    key: "currency",
    path: "/currency",
    component: lazy(() => import("../../pages/home"))
  },
  {
    name: "Pricing",
    key: "pricing",
    path: "/pricing",
    component: lazy(() => import("../../pages/pricing"))
  },
  {
    name: "Contact-Us",
    key: "contact-us",
    path: "/contact-us",
    component: lazy(() => import("../../pages/contact"))
  },
  {
    name: "Privacy",
    key: "privacy",
    path: "/privacy",
    component: lazy(() => import("../../pages/privacy"))
  },
 {
    name: "Terms",
    key: "terms",
    path: "/terms",
    component: lazy(() => import("../../pages/terms"))
  },
   {
    name: "News",
    key: "news",
    path: "/news",
    component: lazy(() => import("../../pages/news"))
  },
  {
    name: "Billing",
    key: "billing",
    path: "/billing",
    component: lazy(() => import("../../pages/setting/Billing"))
  },
   {
    name: "Admin Dashboard",
    key: "admin-dashboard",
    path: "/admin-dashboard",
    component: lazy(() => import("../../pages/AdminDashboard"))
  },
 
];

export const protectedRouteNames = protectedRoutes.map((route) => route.key);
export const protectedRoutePaths = protectedRoutes.map((route) => route.path);

export default protectedRoutes;
