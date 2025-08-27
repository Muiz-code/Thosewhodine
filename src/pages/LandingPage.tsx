import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import AboutUs from "../Components/AboutUs";
import Home from "../Components/Home";
import WhatWeDo from "../Components/WhatWeDo";
import Gallery from "../Components/Gallery";
import ConsultationForm from "../Components/ConsultationForm";
import ContactForm from "../Components/ContactUs";
import PopupCard from "../Components/PopupCard";

const LandingPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  // useEffect(() => {
  //   const hasSeenModal = sessionStorage.getItem("hasSeenNewsletter");

  //   if (!hasSeenModal) {
  //     setTimeout(() => {
  //       setShowPopup(true);
  //       sessionStorage.setItem("hasSeenNewsletter", "true");
  //     }, 1000); // delay show by 1 sec
  //   }
  // }, []);

  // const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {showPopup && <PopupCard onClose={() => setShowPopup(false)} />}
      <Home />
      <AboutUs />
      <WhatWeDo />
      <Gallery />
      <ConsultationForm />
      <ContactForm />
    </>
  );
};

export default LandingPage;
