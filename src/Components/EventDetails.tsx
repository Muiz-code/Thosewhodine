import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { events } from "../data/events";
import { ChevronLeft, ChevronRight, X, House } from "lucide-react";

const EventDetail = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  // Data is statically bundled — no async loading or localStorage caching needed
  const event = events.find((e) => e.id === eventId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Lock body scroll while lightbox is open
  useEffect(() => {
    document.body.style.overflow = currentIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [currentIndex]);

  if (!event) {
    return (
      <div className="text-center p-10 bg-[#E5E2D9] min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold text-[#2B3210]">Event not found!</h1>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 text-[#2B3210] hover:scale-105 duration-200 transition"
        >
          <House size={30} />
        </button>
      </div>
    );
  }

  const prev = () =>
    setCurrentIndex((i) => ((i ?? 0) - 1 + event.gallery.length) % event.gallery.length);
  const next = () =>
    setCurrentIndex((i) => (((i ?? 0) + 1) % event.gallery.length));

  return (
    <div className="bg-[#E5E2D9] min-h-screen">
      {/* Hero */}
      <div className="relative h-[50vh] overflow-hidden">
        <img
          src={event.gif}
          alt={`${event.title} cover`}
          className="w-full h-[50vh] object-cover"
        />
        <div className="absolute inset-0 bg-[#2B3210]/70 flex items-center justify-center">
          <motion.h1
            className="text-[50px] md:text-[100px] md:w-[85%] w-[99%] text-center md:p-0 p-[2.5px] montez text-[#fff] textSpace1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {event.title}
          </motion.h1>
        </div>
        <button
          onClick={() => navigate("/")}
          className="absolute md:top-8 top-2 md:left-8 left-2 px-2 py-2 cursor-pointer text-[#E5E2D9] hover:scale-105 duration-200 transition"
          aria-label="Return home"
        >
          <House />
        </button>
      </div>

      {/* Gallery grid */}
      <div className="container mx-auto md:p-8 p-2">
        <div className="columns-2 sm:columns-2 lg:columns-3 md:gap-8 gap-2">
          {event.gallery.map((src: string, index: number) => (
            <motion.div
              key={index}
              className="mb-4 md:mb-8 relative overflow-hidden rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 6) * 0.07 }}
            >
              <img
                src={src}
                alt={`${event.title} — photo ${index + 1}`}
                className="w-full h-auto object-cover cursor-zoom-in transition-transform duration-500 hover:scale-105"
                onClick={() => setCurrentIndex(index)}
                loading="lazy"
                decoding="async"
                width="800"
                height="600"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {currentIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/92 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Close */}
            <button
              onClick={() => setCurrentIndex(null)}
              className="absolute top-6 right-6 text-white z-50 hover:bg-white/20 rounded-full p-2 transition"
              aria-label="Close lightbox"
            >
              <X size={30} />
            </button>

            {/* Prev */}
            <button
              onClick={prev}
              className="absolute left-4 text-white bg-black/50 rounded-full p-2 hover:bg-black transition"
              aria-label="Previous image"
            >
              <ChevronLeft size={40} />
            </button>

            {/* Image with key-driven re-animation */}
            <motion.img
              key={currentIndex}
              src={event.gallery[currentIndex]}
              alt={`${event.title} — zoomed view`}
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg object-contain"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            <button
              onClick={next}
              className="absolute right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black transition"
              aria-label="Next image"
            >
              <ChevronRight size={40} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
              {currentIndex + 1} / {event.gallery.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EventDetail;
