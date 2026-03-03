import { useEffect, useState } from "react";
import AboutUs from "../Components/AboutUs";
import Home from "../Components/Home";
import WhatWeDo from "../Components/WhatWeDo";
import Gallery from "../Components/Gallery";
import ConsultationForm from "../Components/ConsultationForm";
import ContactForm from "../Components/ContactUs";
import PopupCard from "../Components/PopupCard";
import UpcomingEvents from "../Components/UpcomingEvents";

const LandingPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Scroll to top and show newsletter popup (once per session)
    window.scrollTo(0, 0);

    const hasSeenModal = sessionStorage.getItem("hasSeenNewsletter");
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem("hasSeenNewsletter", "true");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {showPopup && <PopupCard onClose={() => setShowPopup(false)} />}
      <Home />
      <AboutUs />
      <WhatWeDo />
      <Gallery />
      <UpcomingEvents />
      <ConsultationForm />
      <ContactForm />
    </>
  );
};

export default LandingPage;
