import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Footer } from "../template/Footer";
import { Navbar } from "../template/navbar/Navbar";
import PageLoader from "../template/PageLoader";
import Particles from "@/components/shared/Particles";

const UserLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="flex flex-col flex-auto min-h-screen min-w-0 relative w-full">
      {/* Show Particles only on Home Page */}
      {isHomePage && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Particles />
        </div>
      )}

      <Navbar />
      <div className="h-full flex flex-auto flex-col justify-between relative z-10">
        <Suspense fallback={<PageLoader />}>
          <main className="relative h-full flex flex-auto flex-col w-screen">
            <Outlet />
          </main>
        </Suspense>
        <Footer />
      </div>
    </div>
  );
};

export default UserLayout;
