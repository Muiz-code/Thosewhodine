/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { events } from "../data/events";
import { ChevronLeft, ChevronRight, X, House } from "lucide-react";

// Cache configuration
const EVENT_CACHE_PREFIX = "wellness_event_";
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

// --- NEW: versioning & build timestamp for cache-busting ---
// Bump this on releases where you want to invalidate client caches.
// Example: change "v1" -> "v2" when you push a change that must be fetched fresh.
const EVENTS_CACHE_VERSION = "v1";
const EVENTS_CACHE_VERSION_KEY = "EVENTS_CACHE_VERSION";

// Build timestamp (set via env at build time to force image reloads).
// For local/dev it will fallback to the EVENTS_CACHE_VERSION so images reload on version bump.
const BUILD_TS =
  (typeof window !== "undefined" && (window as any).process?.env?.REACT_APP_BUILD_TS) ||
  EVENTS_CACHE_VERSION ||
  String(Date.now());

// Remove cached keys that use the prefix
const clearEventCacheKeys = () => {
  try {
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith(EVENT_CACHE_PREFIX)) {
        localStorage.removeItem(key);
      }
    });
  } catch (e) {
    // ignore
    // console.warn("clearEventCacheKeys error", e);
  }
};

// Ensure cache version is up to date. If not, clear old cached items.
const ensureCacheVersion = () => {
  try {
    const stored = localStorage.getItem(EVENTS_CACHE_VERSION_KEY);
    if (stored !== EVENTS_CACHE_VERSION) {
      clearEventCacheKeys();
      localStorage.setItem(EVENTS_CACHE_VERSION_KEY, EVENTS_CACHE_VERSION);
      console.log("🧹 Event cache cleared due to version change.");
    }
  } catch (e) {
    // ignore
    // console.warn("ensureCacheVersion error", e);
  }
};

// Check if cache is valid (checks timestamp AND version)
const isCacheValid = (cacheKey: string): boolean => {
  const cached = localStorage.getItem(cacheKey);
  if (!cached) return false;

  try {
    const { timestamp, version } = JSON.parse(cached);
    if (version !== EVENTS_CACHE_VERSION) return false; // invalid if version mismatches
    const timeSinceCache = Date.now() - timestamp;
    return timeSinceCache < CACHE_DURATION;
  } catch {
    return false;
  }
};

// -----------------------------------------------------------

const EventDetail = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [cachedEvent, setCachedEvent] = useState(
    events.find((e) => e.id === eventId)
  );

  // Ensure cache version on mount (clears stale caches if version bumped)
  useEffect(() => {
    ensureCacheVersion();
  }, []);

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
        // Try to load from cache first (only if still valid and correct version)
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

          // Save to cache with version info
          try {
            localStorage.setItem(
              cacheKey,
              JSON.stringify({
                timestamp: Date.now(),
                version: EVENTS_CACHE_VERSION,
                data: event,
              })
            );
            console.log(`✅ Event "${eventId}" cached successfully!`);
          } catch (e) {
            // storage could fail (quota), ignore
            // console.warn("Failed to cache event", e);
          }
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

  // Helper to append build-ts query param for cache-busting of images
  const withBuildTs = (url: string | undefined) => {
    if (!url) return url;
    // if url already has query params, append with &
    return url.includes("?") ? `${url}&v=${BUILD_TS}` : `${url}?v=${BUILD_TS}`;
  };

  return (
    <div className="bg-[#E5E2D9] min-h-screen">
      {/* --- Landing GIF Section (Always shows immediately) --- */}
      <div className="relative h-[50vh] overflow-hidden">
        <img
          src={withBuildTs(cachedEvent.gif)}
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
                  src={withBuildTs(src)}
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
            src={withBuildTs(cachedEvent.gallery[currentIndex])}
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
