// src/App.tsx
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ReactGA from "react-ga4";
import { useEffect, useState } from "react";
import MainLayout from "./Components/MainLayout";
import LandingPage from "./pages/LandingPage";
import Preloader from "./Components/Preloader";
import EventDetail from "./Components/EventDetails";

const MEASUREMENT_ID = "G-SSXJSYG891";

// Initialize GA4
ReactGA.initialize(MEASUREMENT_ID);

function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<MainLayout />}>
          {/* Renders the full single-scroll website on the homepage */}
          <Route path="/" element={<LandingPage />} />
        </Route>
        <Route path="/events/:eventId" element={<EventDetail />} />
      </Route>
    )
  );

  return (
    <>
      {showPreloader ? (
        <Preloader />
      ) : (
        // The main layout wrapper with a footer at the bottom
        <div className="flex flex-col min-h-screen">
          <RouterProvider router={router} />
          {/* <Footer /> */}
        </div>
      )}
    </>
  );
}

export default App;
