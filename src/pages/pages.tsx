// src/pages/Pages.tsx
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PageLoader from "@/components/template/PageLoader";
import { ProtectedRoute } from "../components/layouts/ProtectedRoute";
import { PublicRoute } from "../components/layouts/PublicRoute";
import protectedRoutes from "../configs/routes/protected-routes";
import publicRoutes from "../configs/routes/public-routes";

const AllRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<PublicRoute />}>
        {publicRoutes.map(({ key, path, component: Component }) => (
          <Route key={key} path={path} element={<Component />} />
        ))}
      </Route>

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        {protectedRoutes.map(({ key, path, component: Component }) => (
          <Route key={key} path={path} element={<Component />} />
        ))}
      </Route>
    </Routes>
  );
};

const Pages = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <AllRoutes />
    </Suspense>
  );
};

export default Pages;
