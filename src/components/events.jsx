import React from "react";

function Events() {
  return (
    <section className="py-16 px-5 text-center bg-white">

      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">Events</h1>

      {/* Description */}
      <p className="max-w-3xl mx-auto mb-14 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nunc placerat, ante eu cursus pretium. Lorem ipsum dolor sit amet.
      </p>

      {/* Events container */}
      <div className="flex justify-center items-start gap-4 max-w-6xl mx-auto mb-14 h-[500px]">

        {/* High */}
        <div className="relative flex-1 min-w-[200px] h-[350px] rounded-2xl overflow-hidden shadow-lg">
          <img src="event4.png" alt="Annual Function" className="w-full h-full object-cover" />
          <EventInfo />
        </div>

        {/* Low */}
        <div className="relative flex-1 min-w-[200px] h-[350px] mt-16 rounded-2xl overflow-hidden shadow-lg">
          <img src="event1.png" alt="Annual Function" className="w-full h-full object-cover" />
          <EventInfo />
        </div>

        {/* Lowest */}
        <div className="relative flex-1 min-w-[200px] h-[350px] mt-32 rounded-2xl overflow-hidden shadow-lg">
          <img src="event2.png" alt="Annual Function" className="w-full h-full object-cover" />
          <EventInfo />
        </div>

        {/* Low */}
        <div className="relative flex-1 min-w-[200px] h-[350px] mt-16 rounded-2xl overflow-hidden shadow-lg">
          <img src="event3.png" alt="Annual Function" className="w-full h-full object-cover" />
          <EventInfo />
        </div>

        {/* High */}
        <div className="relative flex-1 min-w-[200px] h-[350px] rounded-2xl overflow-hidden shadow-lg">
          <img src="event4.png" alt="Annual Function" className="w-full h-full object-cover" />
          <EventInfo />
        </div>

      </div>

      {/* Button */}
      <button className="px-10 py-3 border border-orange-500 text-orange-500 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition">
        Show More
      </button>

    </section>
  );
}

/* Reusable Info Overlay */
const EventInfo = () => (
  <div className="absolute bottom-0 left-0 right-0 p-5 text-left bg-gradient-to-t from-black/80 to-transparent text-white">
    <h3 className="text-lg font-semibold mb-1">Annual Function</h3>
    <p className="text-sm opacity-90">
      Lorem ipsum dolor sit amet adipiscing dolor ipsum.
    </p>
  </div>
);

export default Events;
