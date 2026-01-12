import React from "react";

function Event() {
  return (
    <>
      {/* Header */}
      <div className="text-center mb-8 px-4">
        <h1 className="text-2xl font-bold">Events</h1>
        <p className="mx-auto mt-4 max-w-3xl text-gray-600 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere
          purus ut leo iaculis convallis. Nullam fermentum odio quis. Etiam vel
          consectetur dolor. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Cras posuere purus ut leo iaculis convallis. Nullam fermentum
          odio quis Etiam vel consectetur dolor. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
      </div>

      {/* EVENTS WRAPPER */}
      <div className="px-6 md:px-10">

        {/* TOP ROW */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          {/* BIG CARD */}
          <div className="relative rounded-2xl overflow-hidden flex-2 h-96 md:h-[460px]">
            <img
              src="event2.png"
              alt="event"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/75 to-transparent text-white">
              <span className="bg-orange-500 px-3 py-1 rounded-full text-xs inline-block mb-1">
                Upcoming · Dec 24, 2024
              </span>
              <h3 className="text-base mt-1">Lorem ipsum dolor sit amet</h3>
              <p className="text-xs opacity-90">Sed in urna arcu. Sed elit dui.</p>
            </div>
          </div>

          {/* SMALL CARD */}
          <div className="relative rounded-2xl overflow-hidden flex-1 h-48 md:h-[460px]">
            <img
              src="event3.png"
              alt="event"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/75 to-transparent text-white">
              <h4 className="text-sm mt-1">Annual Function</h4>
              <p className="text-xs opacity-90">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="flex flex-wrap gap-4">
          <EventSmall />
        </div>
      </div>

      {/* Button */}
      <button className="mt-8 mb-12 px-10 py-3 border-2 border-orange-500 text-orange-500 rounded-full font-bold mx-auto block hover:bg-orange-500 hover:text-white transition duration-300">
        Show More
      </button>
    </>
  );
}

function EventSmall() {
  const smallEvents = [
    "event1.png",
    "event3.png",
    "event4.png",
    "event2.png",
  ];

  return (
    <>
      {smallEvents.map((img, index) => (
        <div
          key={index}
          className="relative rounded-2xl overflow-hidden flex-1 min-w-[220px] h-56 md:h-56"
        >
          <img src={img} alt="event" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/75 to-transparent text-white">
            <h4 className="text-sm mt-1">Annual Function</h4>
            <p className="text-xs opacity-90">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Event;
