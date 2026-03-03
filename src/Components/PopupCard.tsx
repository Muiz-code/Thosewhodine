import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/Logo NoBg Red.svg";

interface PopupCardProps {
  onClose: () => void;
}

const PopupCard = ({ onClose }: PopupCardProps) => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/mpwjzvey", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        setTimeout(onClose, 2000);
      } else {
        alert("Subscription failed. Please try again.");
      }
    } catch {
      alert("Network error. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center backdrop-blur-sm"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white w-[95%] max-w-4xl md:h-[60%] h-auto rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden"
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-xl text-gray-500 hover:text-black hover:border-black transition z-10"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Left: Form */}
        <div className="w-full md:w-1/2 bg-[#f8f9fa] p-6 md:p-10 flex flex-col justify-center gap-6">
          {submitted ? (
            <motion.div
              className="flex flex-col items-center justify-center gap-3 text-center h-full"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="md:text-3xl text-xl font-bold montez text-[#2B3210]">
                You're on the list!
              </p>
              <p className="text-[#2b3210] text-sm playfair">
                We'll be in touch with all things TWD.
              </p>
            </motion.div>
          ) : (
            <>
              <div>
                <h2 className="md:text-5xl text-2xl font-bold montez textSpace2 capitalize text-[#2B3210]">
                  Join TWD.
                </h2>
                <p className="text-[#2b3210] text-[13px] playfair mt-2">
                  Stay in the loop with Those Who Dine and be the first to
                  receive updates on our next unforgettable dinner parties.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 w-full"
              >
                <div className="flex gap-3 w-full">
                  <input
                    type="text"
                    name="FNAME"
                    placeholder="First name"
                    className="block w-full rounded-md border-[#2B3210] outline-0 p-2 border-b text-[#2b3210] playfair"
                    required
                  />
                  <input
                    type="text"
                    name="LNAME"
                    placeholder="Last name"
                    className="block w-full rounded-md border-[#2B3210] outline-0 p-2 border-b text-[#2b3210] playfair"
                  />
                </div>

                <input
                  type="email"
                  name="EMAIL"
                  placeholder="Email address"
                  className="block w-full rounded-md border-[#2B3210] outline-0 p-2 border-b text-[#2b3210] playfair"
                  required
                />

                <div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-[#2B3210] text-white py-2 px-6 rounded-md hover:bg-[#2B3210]/80 transition w-2/5 disabled:opacity-60 playfair"
                  >
                    {submitting ? "Sending…" : "Subscribe"}
                  </button>
                  <p className="text-xs text-gray-500 mt-2">
                    We respect your privacy. Unsubscribe anytime.
                  </p>
                </div>
              </form>
            </>
          )}
        </div>

        {/* Right: Logo */}
        <div className="hidden md:flex items-center justify-center md:w-1/2 h-full bg-[#E5E2D9]/30">
          <img
            src={logo}
            alt="Those Who Dine"
            className="w-[75%] h-auto"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default PopupCard;
