import React from "react";

function Truste() {
  return (
    <>
      {/* Heading Section */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-2">
          Our Trustee
        </h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, Nunc placerat.
        </p>
      </div>

      {/* Images Section */}
      <div className="flex flex-col gap-6 items-center">
        <img
          src="p2.png"
          alt="Trustee"
          className="w-[90%]"
        />
        <img
          src="p1.png"
          alt="Trustee"
          className="w-[90%]"
        />
      </div>
    </>
  );
}

export default Truste;
