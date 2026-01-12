import React from "react";

function History() {
  return (
    <section className="py-10 px-4 md:px-10">
      {/* Title */}
      <h1 className="text-4xl font-semibold text-center mb-10">
        History
      </h1>

      {/* Content */}
      <div className="max-w-[95%] mx-auto flex flex-col md:flex-row items-start gap-12">
        
        {/* Left Content */}
        <div className="md:w-[60%]">
          <h2 className="text-blue-600 text-3xl font-semibold mb-6">
            1969–2024
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras posuere purus ut leo iaculis convallis.
            Nullam fermentum odio quis volutpat libe sodales elementum.
            Pellentesque volutpat libero eu ex cursus lacinia.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Etiam vel consectetur dolor.
            <span className="text-blue-600 font-medium">
              {" "}Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
            Cras posuere purus ut leo iaculis convallis.
            Nullam fermentum odio quis fermentum odio quis.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Volutpat libe sodales elementum.
            Pellentesque volutpat libero eu ex cursus lacinia.
            Etiam vel consectetur dolor.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-[50%]">
          <img
            src="school-building.jpg"
            alt="School Building"
            className="w-full h-[500px] rounded-2xl object-cover shadow-md"
          />
        </div>

      </div>
    </section>
  );
}

export default History;
