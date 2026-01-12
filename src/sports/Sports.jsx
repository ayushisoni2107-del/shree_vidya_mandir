import React from "react";

function Sport() {
  const sports = [
    { img: "s1 (2).png", title: "Football", date: "April 2024", color: "bg-blue-700", height: "h-96" },
    { img: "s2.png", title: "Cricket", date: "April 2024", color: "bg-blue-700", height: "h-[600px]" },
    { img: "s3.png", title: "Badminton", date: "April 2024", color: "bg-blue-700", height: "h-96" },
    { img: "s4.png", title: "Volleyball", date: "April 2024", color: "bg-blue-700", height: "h-96" },
    { img: "s5.png", title: "Hockey", date: "April 2024", color: "bg-orange-500", height: "h-96" },
    { img: "s6.png", title: "Tennis", date: "April 2024", color: "bg-orange-500", height: "h-96" },
    { img: "s3.png", title: "Badminton", date: "April 2024", color: "bg-blue-700", height: "h-[500px]" },
    { img: "s1 (2).png", title: "Football", date: "April 2024", color: "bg-orange-500", height: "h-96" },
  ];

  return (
    <>
      {/* Header */}
      <div className="text-center px-4 mt-8">
        <h1 className="text-3xl font-bold">SPORTS</h1>
        <p className="mx-auto mt-4 max-w-3xl text-gray-600 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere purus ut leo iaculis convallis.
        </p>
      </div>

      {/* Masonry Columns */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 px-4 md:px-16 mt-10 space-y-4">
        {sports.map((sport, index) => (
          <div
            key={index}
            className={`relative rounded-xl overflow-hidden shadow-lg mb-4 break-inside-avoid ${sport.height}`}
          >
            <img
              src={sport.img}
              alt={sport.title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute bottom-0 w-full ${sport.color} text-white p-3`}>
              <h4 className="text-sm font-semibold">{sport.title}</h4>
              <span className="text-xs">{sport.date}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Sport;
