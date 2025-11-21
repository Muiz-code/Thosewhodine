import { Upcomingevents } from "../data/events";
import { Link } from "react-router-dom";

const UpcomingEvents = () => {
  return (
    <div
      className="mx-auto md:px-[10%] p-3 pt-5 py-[2%] flex flex-col gap-5 h-screen bg-[#2b321049]"
      id="upcoming-events"
    >
      <h1 className=" md:text-4xl text-3xl font-bold montez textSpace2 capitalize">
        Upcoming Events
      </h1>
      <div className="w-[100%] flex flex-col justify-center">
        {Upcomingevents.map((Upcomingevents) => (
          <Link
            to={"https://pv.rsvp/dine-at-night"}
            target="blank"
            rel="noopener noreferrer"
            key={Upcomingevents.id}
            className="relative block group transition-transform duration-300 transform hover:scale-101"
          >
            <div className="md:flex grid w-[100%] gap-5">
              <img
                src={Upcomingevents.coverImage}
                alt={Upcomingevents.title}
                className="md:w-[50%] w-[100%] h-[80vh] object-fit-cover rounded-lg shadow-lg"
              />
              <img
                src={Upcomingevents.coverImage2}
                alt={Upcomingevents.title}
                className="w-[50%] h-[80vh] md:flex hidden object-fit-cover rounded-lg shadow-lg"
              />
            </div>
            {/* <div className="absolute inset-0 bg-black/20 rounded-lg"></div> */}

            {/* <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg transition-opacity duration-300 group-hover:opacity-100 opacity-0 w-[100%]"></div> */}

            {/* <div className="absolute md:bottom-1 bottom-0 md: left-1left-5 text-white p-2 text-left transition-all duration-300">
              <h2 className="md:text-5xl text-xl font-bold montez textSpace2 capitalize text-white">
                {Upcomingevents.title}
              </h2>
            </div> */}
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          to={"https://pv.rsvp/dine-at-night"}
          target="blank"
          rel="noopener noreferrer"
          className="bg-black px-5 py-3 text-xl dm-sans text-white rounded-xl md:w-[30%] w-[70%] text-center hover:scale-105 transition-all duration-300"
        >
          Get Ticket
        </Link>
      </div>
    </div>
  );
};

export default UpcomingEvents;
