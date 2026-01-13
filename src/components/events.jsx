import React from "react";

function Events() {
  return (
    <section className="py-16 px-5 text-center bg-white">

      {/* Title */}
      <h1 className="text-5xl font-bold md:font-serif mb-4">Events</h1>

      {/* Description */}
      <p className="max-w-3xl mx-auto mb-14 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nunc placerat, ante eu cursus pretium. Lorem ipsum dolor sit amet.
      </p>

      {/* Events container */}
<div className="relative w-full mb-14 overflow-hidden ">
  <div className="flex items-start gap-8 -mx-[12vw]">

    <div className="relative group w-[420px] h-[520px] flex-shrink-0 rounded-3xl overflow-hidden shadow-xl">
      <img src="event4.png" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
      <EventInfo />
    </div>

    <div className="relative group w-[420px] h-[520px] mt-24 flex-shrink-0 rounded-3xl overflow-hidden shadow-xl">
      <img src="event1.png" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
      <EventInfo />
    </div>

    <div className="relative group w-[420px] h-[520px] mt-44 flex-shrink-0 rounded-3xl overflow-hidden shadow-xl">
      <img src="event2.png" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
      <EventInfo />
    </div>

    <div className="relative group w-[420px] h-[520px] mt-24 flex-shrink-0 rounded-3xl overflow-hidden shadow-xl">
      <img src="event3.png" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
      <EventInfo />
    </div>

    <div className="relative group w-[420px] h-[520px] flex-shrink-0 rounded-3xl overflow-hidden shadow-xl">
      <img src="event4.png" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
      <EventInfo />
    </div>

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
