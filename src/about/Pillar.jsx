import React from "react";

function Pillar() {
const pillars = [
  { img: "chair.png", name: "Girishbhai Patel", role: "Chairman" },
  { img: "vice.png", name: "Girishbhai Patel", role: "Vice" },
  { img: "vice.png", name: "Girishbhai Patel", role: "Vice" },
  { img: "vice.png", name: "Girishbhai Patel", role: "Vice" },
  { img: "minister.png", name: "Girishbhai Patel", role: "Minister" },
  { img: "minister.png", name: "Girishbhai Patel", role: "Minister" },
  { img: "minister.png", name: "Girishbhai Patel", role: "Minister" },
  { img: "minister.png", name: "Girishbhai Patel", role: "Minister" },
];

  return (
    <>
      <br /><br />

      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold font-serif mb-3">Our Pillar</h1>
        <p className="text-gray-600 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, Nunc placerat.
        </p>
      </div>

      {/* Pillar Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {pillars.map((item, index) => (
          <div
            key={index}
            className="relative group h-[380px] rounded-[30px] overflow-hidden shadow-lg cursor-pointer"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
             {/* Hover Overlay */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                ${item.role === "Vice" ? "bg-blue-700" : item.role === "Minister" ? "bg-gray-700" : "bg-orange-500"} `} ></div>
            {/* Hover Text */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  {item.name}
                </h3>
                <p className="text-base leading-relaxed tracking-wide">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

              <span className="text-right font-semibold flex items-center justify-end gap-2">
                More Detail →
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Pillar;
