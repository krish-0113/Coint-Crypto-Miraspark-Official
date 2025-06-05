import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PageLoader from "@/components/template/PageLoader";
import { ProtectedRoute } from "../components/layouts/ProtectedRoute";
import { PublicRoute } from "../components/layouts/PublicRoute";
import protectedRoutes from "../configs/routes/protected-routes";
import publicRoutes from "../configs/routes/public-routes";
import UserDashboardLayout from '@/components/layouts/UserDashboardLayout'
const AllRoutes = () => {
  return (
      <Routes>
      {/* Protected Routes */}

      {/* User Dashboard Routes with Layout */}
      <Route element={<ProtectedRoute />}>
        <Route element={<UserDashboardLayout />}>
          {protectedRoutes
            .filter(({ path }) => ["/watchlist", "/coins","/manage"].includes(path))
            .map(({ key, path, component: Component }) => (
              <Route key={key} path={path} element={<Component />} />
            ))}
        </Route>

        {/* All Other Protected Routes */}
        {protectedRoutes
          .filter(({ path }) => !["/watchlist", "/coins"].includes(path))
          .map(({ key, path, component: Component }) => (
            <Route key={key} path={path} element={<Component />} />
          ))}
      </Route>

      {/* Public Routes */}
      <Route element={<PublicRoute />}>
        {publicRoutes.map(({ key, path, component: Component }) => (
          <Route key={key} path={path} element={<Component />} />
        ))}
      </Route>
    </Routes>
  );
};

const Pages = () => {
  return (
    <>
      <Suspense fallback={<PageLoader />}>
        <AllRoutes />
      </Suspense>
    </>
  );
};

export default Pages;
