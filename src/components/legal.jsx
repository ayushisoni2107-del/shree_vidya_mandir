import React from "react";

function Legal() {
  return (
    <section className="py-16 bg-white text-center">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-4">
        55 Years of Legacy
      </h1>

      {/* Description */}
      <p className="max-w-3xl mx-auto text-gray-600 mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere
        purus ut leo iaculis convallis. Nullam fermentum odio quis volutpat
        libero sodales elementum.
      </p>

      {/* Timeline */}
      <div className="flex items-center justify-center gap-8">
        
        {/* 1969 */}
        <div className="flex flex-col items-center">
          <div className="w-28 h-28 rounded-full border-4 border-blue-600 flex items-center justify-center overflow-hidden mb-2">
            <img
              src="old-logo.jpg"
              alt="1969 Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-semibold text-lg">1969</span>
        </div>

        {/* Arrow */}
        <span className="text-3xl font-bold text-gray-400">→</span>

        {/* 2024 */}
        <div className="flex flex-col items-center">
          <div className="w-28 h-28 rounded-full border-4 border-blue-600 flex items-center justify-center overflow-hidden mb-2">
            <img
              src="logo.png"
              alt="2024 Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-semibold text-lg">2024</span>
        </div>

      </div>
    </section>
  );
}

export default Legal;
