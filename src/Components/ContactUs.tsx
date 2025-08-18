import React, { useState } from "react";
import contactImage from "../assets/ChefSelection.jpg";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Thank you for your message! We will be in touch shortly.");
  };

  return (
    <div
      id="contact"
      className="md:px-[10%] md:py-[2%] md:pb-[6%] p-3 bg-[#E5E2D9] flex flex-col relative h-auto w-full mx-auto"
    >
      <div className="flex flex-col md:flex-row gap-8 items-center w-full max-w-6xl mx-auto">
        {/* Form Section */}
        <div className="flex-1 w-full order-2 md:order-1">
          <div className="mb-4">
            <h2 className="md:text-4xl text-3xl font-bold montez textSpace2 text-[#2B3210]">
              Planning a dinner party?
            </h2>
            <p className="text-[#2b3210] md:text-xl text-[15px] playfair mt-2">
              Reach out to us!
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            <div>
              <label
                htmlFor="name"
                className="block md:text-xl text-[15px] font-medium text-[#2B3210] playfair mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="block w-full md:text-xl text-[13px] rounded-md border-[#2B3210] outline-0 p-2 border-b text-[#2b3210] playfair"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block md:text-xl text-[15px] font-medium text-[#2B3210] playfair mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full md:text-xl text-[13px] rounded-md border-[#2B3210] outline-0 p-2 border-b text-[#2b3210] playfair"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block md:text-xl text-[15px] font-medium text-[#2B3210] playfair mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="block w-full md:text-xl text-[13px] rounded-md border-[#2B3210] outline-0 p-2 border-b text-[#2b3210] playfair"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block md:text-xl text-[15px] font-medium text-[#2B3210] playfair mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="block w-full md:text-xl text-[13px] rounded-md border-[#2B3210] outline-0 p-2 border-b text-[#2b3210] playfair"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm font-medium text-[#E5E2D9] bg-[#2B3210] hover:bg-[#2B3210]/50 hover:text-[#2B3210] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:scale-102 transition-transform duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Image Section */}
        <div className="flex-1 w-full order-1 md:order-2">
          <img
            src={contactImage}
            alt="An image representing a dinner party"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
