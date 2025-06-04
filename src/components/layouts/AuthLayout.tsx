"use client"
import { Suspense } from "react"
import { Outlet } from "react-router-dom"

import AuthSectionImage from "../shared/AuthSectionImage"
import { Footer } from "../template/Footer"
import PageLoader from "../template/PageLoader"

const AuthLayout = () => {
  return (
    <Suspense>
      <div className="flex flex-auto flex-col justify-between min-h-screen">
        <main className="flex-1 grid grid-cols-1 lg:grid-cols-2">
          <AuthSectionImage />
          <Suspense fallback={<PageLoader />}>
            <div
              className="flex flex-col justify-center gap-4 md:gap-8 items-center relative"
              style={{
                background: "linear-gradient(135deg, #000000, #020202, #050508, #0f1419, #1a1a2e, #080812, #000000)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Lighter navy corner accents */}
              <div
                className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
                style={{ backgroundColor: "rgba(26, 26, 46, 0.12)" }}
              ></div>
              <div
                className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl"
                style={{ backgroundColor: "rgba(22, 33, 62, 0.08)" }}
              ></div>

              {/* Medium navy central glow */}
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[100px]"
                style={{ backgroundColor: "rgba(15, 20, 25, 0.08)" }}
              ></div>

              {/* Lighter navy accent spots */}
              <div
                className="absolute top-1/4 right-1/3 w-48 h-48 rounded-full blur-2xl"
                style={{ backgroundColor: "rgba(30, 41, 59, 0.06)" }}
              ></div>
              <div
                className="absolute bottom-1/3 left-1/4 w-32 h-32 rounded-full blur-xl"
                style={{ backgroundColor: "rgba(51, 65, 85, 0.05)" }}
              ></div>

              {/* Original green light with reduced opacity */}
              {/* <img
                src="/img/green.svg"
                alt="Green Light"
                className="absolute top-0 left-0 transform -translate-x-1/2 pointer-events-none opacity-2"
              /> */}

              {/* Form container with subtle border */}
              <div className="flex flex-col max-w-[400px] w-full space-y-6 my-12 md:my-0 relative z-10">
                <Outlet />
              </div>

              {/* Grid pattern with lighter navy tint */}
              <div
                className="absolute inset-0 z-0 opacity-2"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(26, 26, 46, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(26, 26, 46, 0.3) 1px, transparent 1px)",
                  backgroundSize: "60px 60px",
                }}
              ></div>

              {/* Layered navy overlays for depth */}
              <div
                className="absolute inset-0 z-0 opacity-6"
                style={{
                  background:
                    "radial-gradient(circle at 20% 80%, rgba(22, 33, 62, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(30, 41, 59, 0.12) 0%, transparent 50%)",
                }}
              ></div>

              {/* Subtle lighter navy streaks */}
              <div
                className="absolute inset-0 z-0 opacity-8"
                style={{
                  background:
                    "linear-gradient(45deg, transparent 30%, rgba(51, 65, 85, 0.08) 50%, transparent 70%), linear-gradient(-45deg, transparent 30%, rgba(30, 41, 59, 0.06) 50%, transparent 70%)",
                }}
              ></div>

              {/* Black vignette to maintain darkness */}
              <div
                className="absolute inset-0 z-0 opacity-15"
                style={{
                  background: "radial-gradient(circle at center, transparent 20%, rgba(0, 0, 0, 0.7) 100%)",
                }}
              ></div>
            </div>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Suspense>
  )
}

export default AuthLayout
