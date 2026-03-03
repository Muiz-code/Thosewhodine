import { Upcomingevents } from "../data/events";

const RSVP_URL = "https://pv.rsvp/dine-at-night";

const UpcomingEvents = () => {
  return (
    <div
      className="mx-auto md:px-[10%] p-3 pt-5 py-[2%] flex flex-col gap-5 h-screen bg-[#2b321049]"
      id="upcoming-events"
    >
      <h1 className="md:text-4xl text-3xl font-bold montez textSpace2 capitalize">
        Upcoming Events
      </h1>
      <div className="w-[100%] flex flex-col justify-center">
        {Upcomingevents.map((event) => (
          // External URL — use <a> not React Router <Link>
          <a
            href={RSVP_URL}
            target="_blank"
            rel="noopener noreferrer"
            key={event.id}
            className="relative block group transition-transform duration-300 transform hover:scale-101"
          >
            <div className="md:flex grid w-[100%] gap-5">
              <img
                src={event.coverImage}
                alt={event.title}
                className="md:w-[50%] w-[100%] h-[80vh] object-fit-cover rounded-lg shadow-lg"
                loading="lazy"
              />
              <img
                src={event.coverImage2}
                alt={event.title}
                className="w-[50%] h-[80vh] md:flex hidden object-fit-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </a>
        ))}
      </div>
      <div className="flex justify-center">
        <a
          href={RSVP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black px-5 py-3 text-xl dm-sans text-white rounded-xl md:w-[30%] w-[70%] text-center hover:scale-105 transition-all duration-300"
        >
          Get Ticket
        </a>
      </div>
    </div>
  );
};

export default UpcomingEvents;
