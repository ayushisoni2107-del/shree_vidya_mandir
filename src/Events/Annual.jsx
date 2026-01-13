import React from "react";

function Annual() {
  return (
    <>
    <br/><br/>
      {/* Header */}
      <div className="text-center mb-8 px-4">
        <h1 className="text-5xl md:font-serif font-bold">Annual Function</h1>
        <p className="mx-auto mt-4 max-w-3xl text-gray-600 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, ante eu cursus pretium
        </p>
      </div>

      {/* First Row */}
      <div className="flex justify-center gap-4 px-2 flex-wrap">
        <img
          src="event4.png"
          alt="Annual 1"
          className="w-1/5 h-72 rounded-2xl object-cover"
        />
        <img
          src="event2.png"
          alt="Annual 2"
          className="w-1/5 h-72 rounded-2xl object-cover"
        />
        <img
          src="event1.png"
          alt="Annual 3"
          className="w-1/5 h-72 rounded-2xl object-cover"
        />
        <img
          src="event3.png"
          alt="Annual 4"
          className="w-1/5 h-72 rounded-2xl object-cover"
        />
      </div>

      {/* Second Row */}
      <div className="flex justify-center gap-4 px-2 mt-4 flex-wrap">
        <img
          src="event1.png"
          alt="Annual 5"
          className="w-1/5 h-72 rounded-2xl object-cover"
        />
        <img
          src="event3.png"
          alt="Annual 6"
          className="w-1/5 h-72 rounded-2xl object-cover"
        />
        <img
          src="event4.png"
          alt="Annual 7"
          className="w-1/5 h-72 rounded-2xl object-cover"
        />
        <img
          src="event2.png"
          alt="Annual 8"
          className="w-1/5 h-72 rounded-2xl object-cover"
        />
      </div>

      {/* Button */}
      <button className="mt-8 mb-12 px-10 py-3 border-2 border-orange-500 text-orange-500 rounded-full font-bold mx-auto block hover:bg-orange-500 hover:text-white transition duration-300">
        Show More
      </button>
    </>
  );
}
const EventInfo = () => (
  <div className="absolute bottom-0 left-0 right-0 p-5 text-left bg-gradient-to-t from-black/80 to-transparent text-white">
    <h3 className="text-lg font-semibold mb-1">Annual Function</h3>
    <p className="text-sm opacity-90">
      Lorem ipsum dolor sit amet adipiscing dolor ipsum.
    </p>
  </div>
);
export default Annual;
