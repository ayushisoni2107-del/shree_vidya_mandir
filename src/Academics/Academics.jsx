import React from "react";

function Academics() {
  return (
    <>
      {/* Header Section */}
      <div className="text-center px-4">
        <h1 className="text-2xl font-bold">Facilities & Services</h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere
          purus ut leo iaculis convallis. Nullam fermentum odio quis. Etiam vel
          consectetur dolor. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Cras posuere purus ut leo iaculis convallis. Nullam fermentum
          odio quis Etiam vel consectetur dolor. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
      </div>

      {/* Images Section */}
      <div className="mt-8 space-y-8">
        <img src="a1.png" className="block mx-auto w-11/12 md:w-4/5" alt="Academics 1" />
        <img src="a1.png" className="block mx-auto w-11/12 md:w-4/5" alt="Academics 2" />
        <img src="a1.png" className="block mx-auto w-11/12 md:w-4/5" alt="Academics 3" />
      </div>

      {/* Show More Button */}
      <button className="mt-8 mb-10 px-10 py-3 border-2 border-orange-500 text-orange-500 rounded-full font-bold mx-auto block hover:bg-orange-500 hover:text-white transition duration-300">
        Show More
      </button>
    </>
  );
}

export default Academics;
