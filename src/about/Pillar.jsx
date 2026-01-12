import React from "react";

function Pillar() {
  return (
    <>
      {/* Heading Section */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-2">
          Our Pillar
        </h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, Nunc placerat.
        </p>
      </div>

      {/* Images Section */}
      <div className="flex flex-col items-center gap-6">
        <img
          src="p2.png"
          alt="Pillar Image 1"
          className="w-[90%]"
        />
        <img
          src="p1.png"
          alt="Pillar Image 2"
          className="w-[90%]"
        />
      </div>
    </>
  );
}

export default Pillar;
