import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { events } from "../data/events";
import { ChevronLeft, ChevronRight, X, House } from "lucide-react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const EventDetail = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState(0);
  const [showGallery, setShowGallery] = useState(false);

  // Define the gallery item type
  type GalleryItem = string | { src: string; type: "video" | "image" };
  
  // Find the event and ensure its gallery is typed
  const event = events.find((e) => e.id === eventId) as
    | (typeof events[number] & { gallery: GalleryItem[] })
    | undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ Restore from localStorage: if already loaded before, skip skeleton
  useEffect(() => {
    if (!event) return;
    const alreadyLoaded = localStorage.getItem(`gallery-loaded-${event.id}`);
    if (alreadyLoaded === "true") {
      setShowGallery(true);
    }
  }, [event]);

  // ✅ When all images load, set delay + persist in localStorage
  useEffect(() => {
    if (!event) return;
    if (loadedImages === event.gallery.length) {
      const timer = setTimeout(() => {
        setShowGallery(true);
        localStorage.setItem(`gallery-loaded-${event.id}`, "true");
      }, 500); // force skeleton to show at least 0.5s
      return () => clearTimeout(timer);
    }
  }, [loadedImages, event]);

  if (!event) {
    return (
      <div className="text-center p-10">
        <h1 className="text-2xl font-bold">Event not found!</h1>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-6 py-2 text-[#E5E2D9] hover:scale-105 duration-200 transition"
        >
          <House />
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#E5E2D9] min-h-screen">
      {/* --- Landing GIF Section --- */}
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
          className="absolute md:top-8 top-2 md:left-8 left-2 md:px-4 px-2 py-2 cursor-pointer text-[#E5E2D9] md:text-[15px] text-[12px] hover:scale-105 duration-200 transition"
        >
          <House />
        </button>
      </div>

      {/* --- Main Photo Gallery Section --- */}
      <div className="container mx-auto md:p-8 p-2">
        <div className="columns-3 sm:columns-2 lg:columns-3 md:gap-8 gap-1">
          {/* Skeletons only if gallery not ready & not cached */}
          {!showGallery &&
            event.gallery.map((_, i) => (
              <div key={i} className="mb-8">
                <Skeleton className="w-full rounded-lg h-[200px] sm:h-[300px] lg:h-[400px]" />
              </div>
            ))}

          {/* Actual images */}
          {event.gallery.map(
            (
              item: string | { src: string; type: "video" | "image" },
              index: number
            ) => {
              // If it's a string, assume it's an image
              const isVideo =
                typeof item !== "string" && item.type === "video";
              const src = typeof item === "string" ? item : item.src;

              return (
                <div
                  key={index}
                  className={`mb-8 relative transition-opacity duration-500 ${
                    showGallery ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {isVideo ? (
                    <video
                      controls
                      className="w-full h-auto rounded-lg shadow-md cursor-pointer"
                      onLoadedData={() => setLoadedImages((prev) => prev + 1)}
                    >
                      <source src={src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={src}
                      alt={`${event.title} - Media ${index + 1}`}
                      className="w-full h-auto object-cover rounded-lg shadow-md cursor-zoom-in transition-transform duration-300 hover:scale-102"
                      onClick={() => setCurrentIndex(index)}
                      onLoad={() => setLoadedImages((prev) => prev + 1)}
                      loading="lazy"
                      width="800"
                      height="600"
                    />
                  )}
                </div>
              );
            }
          )}
        </div>
      </div>

      {/* --- Lightbox Modal --- */}
      {currentIndex !== null && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          {/* Close */}
          <button
            onClick={() => setCurrentIndex(null)}
            className="absolute top-6 right-6 text-white text-3xl z-50"
          >
            <X size={30} />
          </button>

          {/* Prev */}
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

          {/* Media */}
          {(() => {
            const item = event.gallery[currentIndex] as GalleryItem;
            const isVideo = typeof item !== "string" && item.type === "video";
            const src = typeof item === "string" ? item : item.src;

            return isVideo ? (
              <video
                controls
                autoPlay
                className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
              >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={src}
                alt="Zoomed"
                className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg object-contain"
              />
            );
          })()}

          {/* Next */}
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
