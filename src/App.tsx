import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ReactGA from "react-ga4";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense, useEffect, useState } from "react";
import MainLayout from "./Components/MainLayout";
import Preloader from "./Components/Preloader";

// Lazy-load heavy route components — reduces initial JS bundle
const LandingPage = lazy(() => import("./pages/LandingPage"));
const EventDetail = lazy(() => import("./Components/EventDetails"));

// TODO: Gate ReactGA.initialize() behind a GDPR consent check before going live in EU/UK
const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID ?? "G-SSXJSYG891";

// Router defined at module scope — never recreated on re-render
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<div className="min-h-screen bg-[#E5E2D9]" />}>
              <LandingPage />
            </Suspense>
          }
        />
      </Route>
      <Route
        path="/events/:eventId"
        element={
          <Suspense fallback={<div className="min-h-screen bg-[#E5E2D9]" />}>
            <EventDetail />
          </Suspense>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function NotFound() {
  return (
    <div className="min-h-screen bg-[#E5E2D9] flex flex-col items-center justify-center gap-4">
      <h1 className="md:text-5xl text-3xl font-bold montez text-[#2B3210]">
        Page Not Found
      </h1>
      <a href="/" className="text-[#2B3210] underline playfair text-lg">
        Return home
      </a>
    </div>
  );
}

function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  // Defer GA init to after first paint — not at module scope
  // TODO: Only call this after the user accepts cookies (GDPR compliance)
  useEffect(() => {
    ReactGA.initialize(MEASUREMENT_ID);
  }, []);

  return (
    <>
      {/* AnimatePresence must wrap Preloader here so the exit animation
          actually plays — if Preloader owns AnimatePresence internally,
          unmounting the parent kills the animation before it can run */}
      <AnimatePresence>
        {showPreloader && (
          <Preloader key="preloader" onDone={() => setShowPreloader(false)} />
        )}
      </AnimatePresence>

      {!showPreloader && (
        <div className="flex flex-col min-h-screen">
          <RouterProvider router={router} />
        </div>
      )}
    </>
  );
}

export default App;
