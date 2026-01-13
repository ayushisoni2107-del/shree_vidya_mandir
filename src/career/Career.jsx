import React from "react";

function Career1() {
  return (
    <>
      <div className="mt-10">
        {/* Title */}
        <h1 className="text-center text-5xl font-semibold md:font-serif">Career</h1>

        {/* Description */}
        <p className="text-center text-gray-500 text-sm leading-relaxed mx-auto w-11/12 md:w-2/3 mt-3 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere purus ut leo iaculis convallis. Nullam fermentum odio quis
          Etiam vel consectetur dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere purus ut leo iaculis convallis. 
          Nullam fermentum odio quis Etiam vel consectetur dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-11/12 md:w-10/12 mx-auto">
          {/* Single Job Card */}
          {Array.from({ length: 12 }).map((_, idx) => (
            <div key={idx} className="flex items-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              {/* Logo */}
              <img
                src="logo.png"
                alt="school logo"
                className="w-16 h-16 object-cover mr-4 flex-shrink-0 rounded-md"
              />

              {/* Info */}
              <div>
                <h4 className="text-lg font-semibold">Science Teacher</h4>
                <p className="text-gray-600 text-sm mt-1 mb-2">
                  Shree C.N. Patel Saraswati ShishuMandir
                </p>

                <div className="flex items-center gap-2 text-gray-400 text-xs mb-2">
                  <img src="l.png" alt="" className="w-3 h-3" />
                  <span>0–2 Years</span>
                  <img src="l.png" alt="" className="w-3 h-3" />
                  <span>Lorem ipsum dolor sit amet</span>
                </div>

                <a
                  href="#"
                  className="text-blue-600 font-medium text-sm hover:underline"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <button className="block mx-auto mt-8 mb-10 px-8 py-3 border-2 border-orange-500 text-orange-500 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-colors">
          Show More
        </button>
      </div>
    </>
  );
}

export default Career1;
