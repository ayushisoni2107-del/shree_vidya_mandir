import React from "react";

function Sport() {
  const sports = [
    { img: "s1 (2).png", title: "Football", date: "April 2024", color: "bg-blue-700" },
    { img: "s2.png", title: "Cricket", date: "April 2024", color: "bg-blue-700", featured: true },
    { img: "s3.png", title: "Badminton", date: "April 2024", color: "bg-blue-700" },
    { img: "s4.png", title: "Volleyball", date: "April 2024", color: "bg-blue-700" },
    { img: "s5.png", title: "Hockey", date: "April 2024", color: "bg-orange-500" },
    { img: "s6.png", title: "Tennis", date: "April 2024", color: "bg-orange-500" },
    { img: "s3.png", title: "Badminton", date: "April 2024", color: "bg-blue-700" },
    { img: "s1 (2).png", title: "Football", date: "April 2024", color: "bg-orange-500" },
  ];

  return (
    <>
      {/* Header */}
      <div className="text-center px-4 mt-10">
        <h1 className="text-5xl font-bold md:font-serif">SPORTS</h1>
        <p className="mx-auto mt-4 max-w-3xl text-gray-600 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere purus ut leo iaculis convallis.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="max-w-6xl mx-auto px-4 md:px-10 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
        {sports.map((sport, index) => (
          <div
            key={index}
            className={`relative rounded-xl overflow-hidden shadow-lg
              ${sport.featured ? "row-span-2 auto-rows-[520px]" : ""}
            `}
          >
            <img
              src={sport.img}
              alt={sport.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className={`absolute bottom-0 left-0 right-0 ${sport.color} text-white p-4`}>
              <h4 className="text-sm font-semibold">{sport.title}</h4>
              <span className="text-xs">{sport.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-10">
        <button className="px-6 py-2 border border-gray-400 rounded-full text-sm hover:bg-gray-100 transition">
          View More
        </button>
      </div>
    </>
  );
}

export default Sport;
