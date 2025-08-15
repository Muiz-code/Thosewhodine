import { Link } from "react-router-dom";
import { events } from "../data/events";

const Gallery = () => {
  return (
    <div
      id="events"
      className="container mx-auto md:px-[10%] p-3 pt-5 py-[2%] flex flex-col gap-5 bg-[#2b321049]"
    >
      <h1 className=" md:text-4xl text-3xl font-bold montez textSpace2 capitalize">
        Past Events
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="relative block group transition-transform duration-300 transform hover:scale-101"
          >
            <img
              src={event.coverImage}
              alt={event.title}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />

            <div className="absolute inset-0 bg-black/30 rounded-lg"></div>

            <Link
              to={`/events/${event.id}`}
              className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg transition-opacity duration-300 group-hover:opacity-100 opacity-0"
            ></Link>

            <div className="absolute md:top-15 bottom-0 md: left-1left-5 text-white p-2 text-left transition-all duration-300">
              <h2 className="md:text-5xl text-3xl font-bold montez textSpace2 capitalize text-white mb-5">
                {event.title}
              </h2>
              <div className="h-1 bg-white transition-all duration-300 w-0 group-hover:w-full "></div>
              <p className="mt-2 text-sm italic transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                Click to view gallery
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
