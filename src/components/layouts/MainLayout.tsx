import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Footer } from "../template/Footer";
import { Navbar } from "../template/navbar/Navbar";
import PageLoader from "../template/PageLoader";
const UserLayout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="flex-grow flex flex-col w-full">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default UserLayout;

