import React from "react";

function News() {
  return (
    <section className="py-16 px-5 text-center bg-white">

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-4">News Update</h1>

      {/* Description */}
      <p className="max-w-3xl mx-auto mb-12 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nunc placerat, ante eu cursus pretium. Lorem ipsum dolor sit amet.
      </p>

      {/* Images Row */}
      <div className="flex justify-center gap-6 max-w-6xl mx-auto">

        <img
          src="new1.png"
          alt="News 1"
          className="w-1/4 rounded-xl object-cover"
        />

        <img
          src="new1.png"
          alt="News 2"
          className="w-1/4 rounded-xl object-cover"
        />

        <img
          src="new1.png"
          alt="News 3"
          className="w-1/4 rounded-xl object-cover"
        />

        <img
          src="new1.png"
          alt="News 4"
          className="w-1/4 rounded-xl object-cover"
        />

      </div>

    </section>
  );
}

export default News;
