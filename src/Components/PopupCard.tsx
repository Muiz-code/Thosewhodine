import { useEffect } from "react";
import React from "react";
import logo from "../assets/Logo NoBg Red.svg";

interface PopupCardProps {
  onClose: () => void;
}

const PopupCard: React.FC<PopupCardProps> = ({ onClose }) => {
  // Lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center h-[100vh] transition-opacity duration-300"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white w-[95%] max-w-4xl md:h-[60%] h-[50%px] rounded-xl shadow-xl flex flex-col md:flex-row overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-xl text-gray-600 hover:text-black hover:border-black z-10"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Left: Form */}
        <div className="w-[80%] md:w-1/2 bg-[#f8f9fa] p-8 md:p-10 flex flex-col justify-center gap-10">
          <div>
            <h2 className="md:text-5xl text-3xl font-bold montez textSpace2 capitalize text-[#2B3210]">
              Join TWD.
            </h2>

            <p className="text-[#2b3210] text-[13px] playfair mt-2">
              Stay in the loop with Those Who Dine and be the first to receive
              updates on our next unforgettable dinner parties and wellness
              experiences.
            </p>
          </div>
          <form
            action="https://formspree.io/f/xblkogvr"
            method="POST"
            target="_blank"
            onSubmit={() => setTimeout(onClose, 100)}
            className="flex flex-col gap-3 w-full space-y-6"
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
                className="bg-black text-white py-2 rounded-md hover:bg-black/80 transition w-2/5"
              >
                Subscribe
              </button>

              <p className="text-xs text-gray-500 mt-2">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </form>
        </div>

        {/* Right: Image */}
        <div className="hidden md:flex items-center justify-center md:w-1/2 h-full">
          <img
            src={logo}
            alt="Supper Club Visual"
            className="w-[90%] h-full "
          />
        </div>
      </div>
    </div>
  );
};

export default PopupCard;
