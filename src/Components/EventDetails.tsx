import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { events } from "../data/events";
import { ChevronLeft, ChevronRight, X, House } from "lucide-react";

// Cache configuration
const EVENT_CACHE_PREFIX = "wellness_event_";
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

const EventDetail = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [cachedEvent, setCachedEvent] = useState(
    events.find((e) => e.id === eventId)
  );

  // Check if cache is valid
  const isCacheValid = (cacheKey: string): boolean => {
    const cached = localStorage.getItem(cacheKey);
    if (!cached) return false;

    try {
      const { timestamp } = JSON.parse(cached);
      const timeSinceCache = Date.now() - timestamp;
      return timeSinceCache < CACHE_DURATION;
    } catch {
      return false;
    }
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Load event with caching
  useEffect(() => {
    const loadEvent = () => {
      if (!eventId) {
        setLoading(false);
        return;
      }

      const cacheKey = `${EVENT_CACHE_PREFIX}${eventId}`;

      try {
        // Try to load from cache first
        if (isCacheValid(cacheKey)) {
          const cached = localStorage.getItem(cacheKey);
          if (cached) {
            const { data } = JSON.parse(cached);
            console.log(`✅ Loading event "${eventId}" from cache`);
            setCachedEvent(data);
            setLoading(false);
            return;
          }
        }

        // Cache miss or expired - load from events data
        console.log(`🔄 Loading event "${eventId}" from data file...`);

        const event = events.find((e) => e.id === eventId);

        if (event) {
          setCachedEvent(event);

          // Save to cache
          localStorage.setItem(
            cacheKey,
            JSON.stringify({
              timestamp: Date.now(),
              data: event,
            })
          );

          console.log(`✅ Event "${eventId}" cached successfully!`);
        } else {
          console.warn(`⚠️ Event "${eventId}" not found`);
          setCachedEvent(undefined);
        }
      } catch (error) {
        console.error("❌ Error loading event:", error);
        setCachedEvent(events.find((e) => e.id === eventId));
      } finally {
        setLoading(false);
      }
    };

    loadEvent();
  }, [eventId]);

  // Disable scroll when lightbox is open
  useEffect(() => {
    if (currentIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [currentIndex]);

  if (!cachedEvent) {
    return (
      <div className="text-center p-10 bg-[#E5E2D9] min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-[#2B3210] mb-4">
          Event not found!
        </h1>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 text-[#2B3210] hover:scale-105 duration-200 transition"
        >
          <House size={30} />
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#E5E2D9] min-h-screen">
      {/* --- Landing GIF Section (Always shows immediately) --- */}
      <div className="relative h-[50vh] overflow-hidden">
        <img
          src={cachedEvent.gif}
          alt={`${cachedEvent.title} Landing GIF`}
          className="w-full h-[50vh] object-cover"
        />
        <div className="absolute inset-0 bg-[#2B3210] opacity-70 flex items-center justify-center">
          <h1 className="text-[50px] md:text-[100px] md:w-[85%] w-[99%] text-center md:p-0 p-[2.5px] montez text-[#fff] textSpace1">
            {cachedEvent.title}
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
        {loading ? (
          // Spinner while loading
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#2B3210] mx-auto mb-4"></div>
              <p className="text-[#2B3210] text-lg font-medium montez">
                Loading gallery...
              </p>
            </div>
          </div>
        ) : (
          // Gallery grid
          <div className="columns-3 sm:columns-2 lg:columns-3 md:gap-8 gap-1">
            {cachedEvent.gallery.map((src: string, index: number) => (
              <div key={index} className="mb-8 relative">
                <img
                  src={src}
                  alt={`${cachedEvent.title} - Image ${index + 1}`}
                  className="w-full h-auto object-cover rounded-lg shadow-md cursor-zoom-in transition-transform duration-300 hover:scale-102"
                  onClick={() => setCurrentIndex(index)}
                  loading="lazy"
                  width="800"
                  height="600"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* --- Lightbox Modal --- */}
      {currentIndex !== null && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          {/* Close */}
          <button
            onClick={() => setCurrentIndex(null)}
            className="absolute top-6 right-6 text-white text-3xl z-50 hover:bg-white/20 rounded-full p-2 transition"
          >
            <X size={30} />
          </button>

          {/* Prev */}
          <button
            onClick={() =>
              setCurrentIndex(
                (currentIndex - 1 + cachedEvent.gallery.length) %
                  cachedEvent.gallery.length
              )
            }
            className="absolute left-4 text-white bg-black/50 rounded-full p-2 hover:bg-black transition"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Image */}
          <img
            src={cachedEvent.gallery[currentIndex]}
            alt="Zoomed"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            onClick={() =>
              setCurrentIndex((currentIndex + 1) % cachedEvent.gallery.length)
            }
            className="absolute right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black transition"
          >
            <ChevronRight size={40} />
          </button>

          {/* Image counter */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
            {currentIndex + 1} / {cachedEvent.gallery.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetail;
