import React, { useEffect, useState } from "react";

const ConsultationForm: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    eventTime: string;
    eventType?: string;
    eventDate?: string;
    numberOfGuests?: string;
    budget?: string;
    venue: string;
    indoorsOrOutdoors: string;
    occasion: string;
    aesthetic: string;
    colorPalette: string;
    decorElements: string;
    tableSetup: string;
    otherTableSetup: string;
    inspirationPhotos: string;
    mealType: string;
    otherMealType: string;
    preferredCuisine: string;
    otherPreferredCuisine: string;
    customMenu: string;
    beverages: string;
    dessertCourse: string;
    musicEntertainment: string;
    customItems: string[];
    additionalServices: string[];
  }>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventTime: "",
    eventType: "",
    eventDate: "",
    numberOfGuests: "",
    budget: "",
    venue: "",
    indoorsOrOutdoors: "",
    occasion: "",
    aesthetic: "",
    colorPalette: "",
    decorElements: "",
    tableSetup: "",
    otherTableSetup: "",
    inspirationPhotos: "",
    mealType: "",
    otherMealType: "",
    preferredCuisine: "",
    otherPreferredCuisine: "",
    customMenu: "",
    beverages: "",
    dessertCourse: "",
    musicEntertainment: "",
    customItems: [],
    additionalServices: [],
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    if (type === "checkbox") {
      setFormData((prevData) => {
        const list =
          (prevData[name as keyof typeof prevData] as string[]) || [];
        if (checked) {
          return {
            ...prevData,
            [name]: [...list, value],
          };
        } else {
          return {
            ...prevData,
            [name]: list.filter((item) => item !== value),
          };
        }
      });
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const nextStep = () => setCurrentStep((s) => s + 1);
  const prevStep = () => setCurrentStep((s) => s - 1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your submission! We will be in touch shortly.");
  };

  return (
    <div
      id="work-with-us"
      className="md:px-[10%] md:py-[2%] md:pb-[6%] p-3 bg-[#5056314e] flex flex-col relative h-auto w-full mx-auto"
    >
      <div className="mb-2 flex flex-col md:gap-1 gap-1">
        <h2 className="md:text-4xl text-3xl font-bold montez textSpace2">
          Consultation form
        </h2>
        <p className="text-[#2b3210] md:text-xl text-[15px] playfair mb-4">
          Want to throw an unforgettable Dinner Party? Fill the form below to
          get started!
        </p>
      </div>

      <div className="flex w-full">
        <form onSubmit={handleSubmit} className="space-y-12 w-full md:w-[60%]">
          {/* Step 1: Contact Information */}
          {currentStep === 1 && (
            <div>
              <h3 className="md:text-3xl text-2xl font-bold montez text-[#2B3210] mb-6">
                Contact Information
              </h3>
              <div>
                <div className="space-y-6">
                  <div>
                    <label className="block md:text-xl text-[15px] font-medium text-[#2B3210] playfair mb-2">
                      Full Name
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        required
                        className="block w-full md:text-xl text-[13px] rounded-md border-[#2B3210] outline-0 p-2 border-b text-[#2b3210] playfair"
                      />
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        required
                        className="block w-full md:text-xl text-[13px] rounded-md border-[#2B3210] outline-0 p-2 border-b text-[#2b3210] playfair"
                      />
                    </div>
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
                      placeholder="e.g. example@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="block w-full md:text-xl text-[13px] rounded-md border-[#2B3210] outline-0 p-2 border-b text-[#2b3210] playfair"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block md:text-xl text-[15px] font-medium text-[#2B3210] playfair mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="e.g., +234 123 4567"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="block w-full md:text-xl text-[13px] rounded-md border-[#2B3210] outline-0 p-2 border-b text-[#2b3210] playfair"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-6">
                <div />
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-2 bg-[#2B3210] text-white rounded playfair"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Event Details */}
          {currentStep === 2 && (
            <div>
              <h3 className="md:text-3xl text-2xl font-bold montez text-[#2B3210] mb-6">
                Event Details
              </h3>
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="eventType"
                    className="block md:text-xl text-[15px] font-medium text-[#2B3210] playfair mb-2"
                  >
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="block w-full md:text-xl text-[13px] rounded-md border-[#2B3210] outline-0 p-2 border-b text-[#2b3210] playfair"
                  >
                    <option value="">Select an event type</option>
                    <option value="dinnerParty">Dinner Party</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="wedding">Wedding</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="eventDate"
                      className="block md:text-xl text-[15px] font-medium text-[#2B3210] playfair mb-2"
                    >
                      Event Date
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      required
                      className="block w-full md:text-xl text-[13px] rounded-md border-[#2B3210] outline-0 p-2 border-b text-[#2b3210] playfair"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="eventTime"
                      className="block md:text-xl text-[15px] font-medium text-[#2B3210] playfair mb-2"
                    >
                      Event Start Time
                    </label>
                    <input
                      type="time"
                      id="eventTime"
                      name="eventTime"
                      value={formData.eventTime}
                      onChange={handleChange}
                      className="block w-full md:text-xl text-[13px] rounded-md border-[#2B3210] outline-0 p-2 border-b text-[#2b3210] playfair"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="numberOfGuests"
                      className="block md:text-xl text-[15px] font-medium text-[#2B3210] playfair mb-2"
                    >
                      No. Of Guests
                    </label>
                    <input
                      type="number"
                      id="numberOfGuests"
                      name="numberOfGuests"
                      value={formData.numberOfGuests}
                      onChange={handleChange}
                      min="1"
                      required
                      className="block w-full md:text-xl text-[13px] rounded-md border-[#2B3210] outline-0 p-2 border-b text-[#2b3210] playfair"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="budget"
                      className="block md:text-xl text-[15px] font-medium text-[#2B3210] playfair mb-2"
                    >
                      Budget
                    </label>
                    <input
                      type="text"
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="e.g., $1000 or Flexible"
                      className="block w-full md:text-xl text-[13px] rounded-md border-[#2B3210] outline-0 p-2 border-b text-[#2b3210] playfair"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-2 bg-gray-400 text-white rounded playfair"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-2 bg-[#2B3210] text-white rounded playfair"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Venue & Setup */}
          {currentStep === 3 && (
            <div>
              <h3 className="md:text-3xl text-2xl font-bold montez text-[#2B3210] mb-6">
                Venue & Setup
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block md:text-xl text-[15px] font-medium text-[#2B3210] playfair mb-2">
                    Do you have a venue or shall we find one for you?
                  </label>
                  <div className="flex gap-4 playfair">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="venue"
                        value="Have a venue"
                        checked={formData.venue === "Have a venue"}
                        onChange={handleChange}
                        className="form-radio"
                      />
                      <span className="ml-2">Have a venue</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="venue"
                        value="Find one for me"
                        checked={formData.venue === "Find one for me"}
                        onChange={handleChange}
                        className="form-radio"
                      />
                      <span className="ml-2">Find one for me</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block md:text-xl text-[15px] font-medium text-[#2B3210] playfair mb-2">
                    Would the event be indoors or outdoors?
                  </label>
                  <div className="flex gap-4 playfair">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="indoorsOrOutdoors"
                        value="Indoors"
                        checked={formData.indoorsOrOutdoors === "Indoors"}
                        onChange={handleChange}
                        className="form-radio"
                      />
                      <span className="ml-2">Indoors</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="indoorsOrOutdoors"
                        value="Outdoors"
                        checked={formData.indoorsOrOutdoors === "Outdoors"}
                        onChange={handleChange}
                        className="form-radio"
                      />
                      <span className="ml-2">Outdoors</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block md:text-xl text-[15px] font-medium text-[#2B3210] playfair mb-2">
                    What kind of table setup are you envisioning?
                  </label>
                  <div className="flex flex-col gap-2 playfair">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="tableSetup"
                        value="Long Table"
                        checked={formData.tableSetup === "Long Table"}
                        onChange={handleChange}
                        className="form-radio"
                      />
                      <span className="ml-2">Long Table</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="tableSetup"
                        value="Round Table"
                        checked={formData.tableSetup === "Round Table"}
                        onChange={handleChange}
                        className="form-radio"
                      />
                      <span className="ml-2">Round Table</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="tableSetup"
                        value="Family Style"
                        checked={formData.tableSetup === "Family Style"}
                        onChange={handleChange}
                        className="form-radio"
                      />
                      <span className="ml-2">Family Style</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="tableSetup"
                        value="Other"
                        checked={formData.tableSetup === "Other"}
                        onChange={handleChange}
                        className="form-radio"
                      />
                      <span className="ml-2">Other:</span>
                    </label>
                    {formData.tableSetup === "Other" && (
                      <input
                        type="text"
                        name="otherTableSetup"
                        value={formData.otherTableSetup}
                        onChange={handleChange}
                        placeholder="Please specify"
                        className="ml-6 block w-1/2 rounded-md border-[#2B3210] outline-0 p-2 border-b text-[#2b3210] playfair"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-2 bg-gray-400 text-white rounded playfair"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-2 bg-[#2B3210] text-white rounded playfair"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Aesthetic & Decor */}
          {currentStep === 4 && (
            <div>
              <h3 className="md:text-3xl text-2xl font-bold montez text-[#2B3210] mb-6">
                Aesthetic & Decor
              </h3>
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="occasion"
                    className="block md:text-xl text-[15px] font-medium text-[#2B3210] playfair mb-2"
                  >
                    What is the occasion or reason for the dinner?
                  </label>
                  <textarea
                    id="occasion"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    rows={3}
                    className="mt-2 block w-full md:text-xl text-[13px] rounded-md border-[#2B3210] outline-0 p-2 border-b text-[#2b3210] playfair"
                  />
                </div>
                <div>
                  <label
                    htmlFor="aesthetic"
                    className="block md:text-xl text-[15px] font-medium text-[#2B3210] playfair mb-2"
                  >
                    How would you describe the overall aesthetic or theme you
                    want?
                  </label>
                  <textarea
                    id="aesthetic"
                    name="aesthetic"
                    value={formData.aesthetic}
                    onChange={handleChange}
                    rows={3}
                    className="mt-2 block w-full md:text-xl text-[13px] rounded-md border-[#2B3210] outline-0 p-2 border-b text-[#2b3210] playfair"
                  />
                </div>
                <div>
                  <label
                    htmlFor="colorPalette"
                    className="block md:text-xl text-[15px] font-medium text-[#2B3210] playfair mb-2"
                  >
                    Do you have a colour palette in mind?
                  </label>
                  <input
                    type="text"
                    id="colorPalette"
                    name="colorPalette"
                    value={formData.colorPalette}
                    onChange={handleChange}
                    className="mt-2 block w-full md:text-xl text-[13px] rounded-md border-[#2B3210] outline-0 p-2 border-b text-[#2b3210] playfair"
                  />
                </div>
                <div>
                  <label
                    htmlFor="decorElements"
                    className="block md:text-xl text-[15px] font-medium text-[#2B3210] playfair mb-2"
                  >
                    Are there any specific decor elements you'd like included?
                  </label>
                  <textarea
                    id="decorElements"
                    name="decorElements"
                    value={formData.decorElements}
                    onChange={handleChange}
                    rows={3}
                    className="mt-2 block w-full md:text-xl text-[13px] rounded-md border-[#2B3210] outline-0 p-2 border-b text-[#2b3210] playfair"
                  />
                </div>
                <div>
                  <label
                    htmlFor="inspirationPhotos"
                    className="block md:text-xl text-[15px] font-medium text-[#2B3210] playfair mb-2"
                  >
                    Do you have any inspiration photos or moodboard you'd like
                    to share?
                  </label>
                  <input
                    type="text"
                    id="inspirationPhotos"
                    name="inspirationPhotos"
                    value={formData.inspirationPhotos}
                    onChange={handleChange}
                    placeholder="e.g., a link to a Pinterest board"
                    className="mt-2 block w-full md:text-xl text-[13px] rounded-md border-[#2B3210] outline-0 p-2 border-b text-[#2b3210] playfair"
                  />
                </div>
              </div>
              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-2 bg-gray-400 text-white rounded playfair"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-2 bg-[#2B3210] text-white rounded playfair"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 5: Meal & Beverages */}
          {currentStep === 5 && (
            <div>
              <h3 className="md:text-3xl text-2xl font-bold montez text-[#2B3210] mb-6">
                Meal & Beverages
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block md:text-xl text-[15px] font-medium text-[#2B3210] playfair mb-2">
                    What type of meal are you envisioning?
                  </label>
                  <div className="flex flex-col gap-2 playfair">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="mealType"
                        value="Plated Dinner"
                        checked={formData.mealType === "Plated Dinner"}
                        onChange={handleChange}
                        className="form-radio"
                      />
                      <span className="ml-2">Plated Dinner</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="mealType"
                        value="Family-style"
                        checked={formData.mealType === "Family-style"}
                        onChange={handleChange}
                        className="form-radio"
                      />
                      <span className="ml-2">Family-style</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="mealType"
                        value="Buffet"
                        checked={formData.mealType === "Buffet"}
                        onChange={handleChange}
                        className="form-radio"
                      />
                      <span className="ml-2">Buffet</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="mealType"
                        value="Tasting Menu"
                        checked={formData.mealType === "Tasting Menu"}
                        onChange={handleChange}
                        className="form-radio"
                      />
                      <span className="ml-2">Tasting Menu</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="mealType"
                        value="Other"
                        checked={formData.mealType === "Other"}
                        onChange={handleChange}
                        className="form-radio"
                      />
                      <span className="ml-2">Other:</span>
                    </label>
                    {formData.mealType === "Other" && (
                      <input
                        type="text"
                        name="otherMealType"
                        value={formData.otherMealType}
                        onChange={handleChange}
                        placeholder="Please specify"
                        className="ml-6 block w-1/2 md:text-xl text-[13px] rounded-md border-[#2B3210] outline-0 p-2 border-b text-[#2b3210] playfair"
                      />
                    )}
                  </div>
                </div>
                <div>
                  <label className="block md:text-xl text-[15px] font-medium text-[#2B3210] playfair mb-2">
                    Any preferred cuisine(s)?
                  </label>
                  <div className="flex flex-col gap-2 playfair">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="preferredCuisine"
                        value="Italian"
                        checked={formData.preferredCuisine === "Italian"}
                        onChange={handleChange}
                        className="form-radio"
                      />
                      <span className="ml-2">Italian</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="preferredCuisine"
                        value="Nigerian"
                        checked={formData.preferredCuisine === "Nigerian"}
                        onChange={handleChange}
                        className="form-radio"
                      />
                      <span className="ml-2">Nigerian</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="preferredCuisine"
                        value="Continental"
                        checked={formData.preferredCuisine === "Continental"}
                        onChange={handleChange}
                        className="form-radio"
                      />
                      <span className="ml-2">Continental</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="preferredCuisine"
                        value="Other"
                        checked={formData.preferredCuisine === "Other"}
                        onChange={handleChange}
                        className="form-radio"
                      />
                      <span className="ml-2">Other:</span>
                    </label>
                    {formData.preferredCuisine === "Other" && (
                      <input
                        type="text"
                        name="otherPreferredCuisine"
                        value={formData.otherPreferredCuisine}
                        onChange={handleChange}
                        placeholder="Please specify"
                        className="ml-6 block w-1/2 md:text-xl text-[13px] rounded-md border-[#2B3210] outline-0 p-2 border-b text-[#2b3210] playfair"
                      />
                    )}
                  </div>
                </div>
                <div>
                  <label className="block md:text-xl text-[15px] font-medium text-[#2B3210] playfair mb-2">
                    Do you want to customise your menu or shall we?
                  </label>
                  <div className="flex flex-col gap-2 playfair">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="customMenu"
                        value="Customise myself"
                        checked={formData.customMenu === "Customise myself"}
                        onChange={handleChange}
                        className="form-radio"
                      />
                      <span className="ml-2">Customise myself</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="customMenu"
                        value="Let Those Who Dine handle it"
                        checked={
                          formData.customMenu === "Let Those Who Dine handle it"
                        }
                        onChange={handleChange}
                        className="form-radio"
                      />
                      <span className="ml-2">Let Those Who Dine handle it</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="beverages"
                    className="block md:text-xl text-[15px] font-medium text-[#2B3210] playfair mb-2"
                  >
                    What type of beverages would you like served?
                  </label>
                  <textarea
                    id="beverages"
                    name="beverages"
                    value={formData.beverages}
                    onChange={handleChange}
                    rows={3}
                    className="mt-2 block w-full md:text-xl text-[13px] rounded-md border-[#2B3210] outline-0 p-2 border-b text-[#2b3210] playfair"
                  />
                </div>
                <div>
                  <label className="block md:text-xl text-[15px] font-medium text-[#2B3210] playfair mb-2">
                    Would you like a dessert course or a cake?
                  </label>
                  <div className="flex gap-4 playfair">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="dessertCourse"
                        value="Yes"
                        checked={formData.dessertCourse === "Yes"}
                        onChange={handleChange}
                        className="form-radio"
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="dessertCourse"
                        value="No"
                        checked={formData.dessertCourse === "No"}
                        onChange={handleChange}
                        className="form-radio"
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-2 bg-gray-400 text-white rounded playfair"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-2 bg-[#2B3210] text-white rounded playfair"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 6: Additional Services + Submit */}
          {currentStep === 6 && (
            <div>
              <h3 className="md:text-3xl text-2xl font-bold montez text-[#2B3210] mb-6">
                Additional Services
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block md:text-xl text-[15px] font-medium text-[#2B3210] playfair mb-2">
                    Do you need help with music/entertainment?
                  </label>
                  <div className="flex gap-4 playfair">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="musicEntertainment"
                        value="Yes"
                        checked={formData.musicEntertainment === "Yes"}
                        onChange={handleChange}
                        className="form-radio"
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="musicEntertainment"
                        value="No"
                        checked={formData.musicEntertainment === "No"}
                        onChange={handleChange}
                        className="form-radio"
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block md:text-xl text-[15px] font-medium text-[#2B3210] playfair mb-2">
                    Are you interested in customised place cards, printed menus
                    or party favours?
                  </label>
                  <div className="flex flex-col gap-2 playfair">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="customItems"
                        value="Place Cards"
                        onChange={handleChange}
                        checked={formData.customItems.includes("Place Cards")}
                        className="form-checkbox"
                      />
                      <span className="ml-2">Place Cards</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="customItems"
                        value="Printed Menu"
                        onChange={handleChange}
                        checked={formData.customItems.includes("Printed Menu")}
                        className="form-checkbox"
                      />
                      <span className="ml-2">Printed Menu</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="customItems"
                        value="Party Favours"
                        onChange={handleChange}
                        checked={formData.customItems.includes("Party Favours")}
                        className="form-checkbox"
                      />
                      <span className="ml-2">Party Favours</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block md:text-xl text-[15px] font-medium text-[#2B3210] playfair mb-2">
                    Any additional services you'd like?
                  </label>
                  <div className="flex flex-col gap-2 playfair">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="additionalServices"
                        value="Photographer"
                        onChange={handleChange}
                        checked={formData.additionalServices.includes(
                          "Photographer"
                        )}
                        className="form-checkbox"
                      />
                      <span className="ml-2">Photographer</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="additionalServices"
                        value="DJ"
                        onChange={handleChange}
                        checked={formData.additionalServices.includes("DJ")}
                        className="form-checkbox"
                      />
                      <span className="ml-2">DJ</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="additionalServices"
                        value="Servers"
                        onChange={handleChange}
                        checked={formData.additionalServices.includes(
                          "Servers"
                        )}
                        className="form-checkbox"
                      />
                      <span className="ml-2">Servers</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-2 bg-gray-400 text-white rounded playfair"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#2B3210] text-white rounded playfair"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ConsultationForm;
