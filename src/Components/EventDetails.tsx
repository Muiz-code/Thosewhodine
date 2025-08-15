import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { events } from "../data/events";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const EventDetail = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const event = events.find((e) => e.id === eventId);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!event) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex !== null) {
        if (e.key === "ArrowRight") {
          setCurrentIndex((prev) =>
            prev !== null ? (prev + 1) % event.gallery.length : 0
          );
        } else if (e.key === "ArrowLeft") {
          setCurrentIndex((prev) =>
            prev !== null
              ? (prev - 1 + event.gallery.length) % event.gallery.length
              : 0
          );
        } else if (e.key === "Escape") {
          setCurrentIndex(null);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, event?.gallery?.length, event]);

  if (!event) {
    return (
      <div className="text-center p-10">
        <h1 className="text-2xl font-bold">Event not found!</h1>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-6 py-2 bg-[#E5E2D9] text-white rounded-lg hover:bg-gray-600 transition"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#E5E2D9] min-h-screen">
      <div className="relative h-[50vh] overflow-hidden">
        <img
          src={event.gif}
          alt={`${event.title} Landing GIF`}
          className="w-full h-[50vh] object-cover"
        />
        <div className="absolute inset-0 bg-[#2B3210] opacity-70 flex items-center justify-center">
          <h1 className="text-[50px] md:text-[100px] md:w-[85%] w-[99%] text-center md:p-0 p-[2.5px] montez text-[#fff] textSpace1">
            {event.title}
          </h1>
        </div>
        <button
          onClick={() => navigate("/")}
          className="absolute md:top-8 top-2 md:left-8 left-2 md:px-4 px-2 py-2 bg-[#E5E2D9] cursor-pointer text-gray-800 md:text-[15px] text-[12px] rounded-full hover:bg-gray-200 transition"
        >
          &larr; Back to Home
        </button>
      </div>

      {/* Main Photo Gallery Section */}
      <div className="container mx-auto md:p-8 p-2">
        <div className="columns-3 sm:columns-2 lg:columns-3 md:gap-8 gap-1">
          {event.gallery.map((image, index) => (
            <div key={index} className="mb-8">
              <img
                src={image}
                alt={`${event.title} - Photo ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg shadow-md cursor-zoom-in transition-transform duration-300 hover:scale-102"
                onClick={() => setCurrentIndex(index)} // <-- Open modal with selected index
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentIndex !== null && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          {/* Close button */}
          <button
            onClick={() => setCurrentIndex(null)}
            className="absolute top-6 right-6 text-white text-3xl z-50"
          >
            <X size={30} />
          </button>

          {/* Prev button */}
          <button
            onClick={() =>
              setCurrentIndex(
                (currentIndex - 1 + event.gallery.length) % event.gallery.length
              )
            }
            className="absolute left-4 text-white bg-black/50 rounded-full p-2 hover:bg-black transition"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Current Image */}
          <img
            src={event.gallery[currentIndex]}
            alt="Zoomed"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg object-contain"
          />

          {/* Next button */}
          <button
            onClick={() =>
              setCurrentIndex((currentIndex + 1) % event.gallery.length)
            }
            className="absolute right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black transition"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
};

export default EventDetail;
