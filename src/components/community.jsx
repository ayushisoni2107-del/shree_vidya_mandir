import React from "react";

function Community() {
  return (
    <section className="py-16 px-5 text-center bg-white">
      
      {/* Title */}
      <h1 className="text-5xl font-bold md:font-serif mb-4">
        COMMUNITY SERVICES
      </h1>

      {/* Description */}
      <p className="max-w-3xl mx-auto mb-12 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat,
        ante eu cursus pretium. Lorem ipsum dolor sit amet, consectetur placerat,
        ante eu cursus pretium.
      </p>

      {/* Gallery */}
      <div className="flex gap-5 max-w-[90%] mx-auto mb-10 h-[650px]">

  {/* Main Image */}
  <div className="flex-[2]">
    <div className="relative group rounded-2xl overflow-hidden w-full h-[650px]">
      
      <img
        src="community1.png"
        alt="Donation Activity"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Text + Button */}
      <div className="absolute inset-0 flex items-end justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white text-xl font-semibold">
          Grocery Kit Distribution
        </h3>
        <button className="bg-orange-500 text-white px-5 py-2 rounded-full font-medium hover:bg-orange-600 transition">
          Know More
        </button>
      </div>

    </div>
  </div>

  {/* Side Images */}
  <div className="flex-[1] flex flex-col gap-5">

    {/* Image 2 */}
    <div className="relative group rounded-3xl overflow-hidden w-full flex-1">
      <img
        src="community2.png"
        alt="Service Activity 1"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="absolute inset-0 flex items-end justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white text-lg font-semibold">
          Community Service
        </h3>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition">
          Know More
        </button>
      </div>
    </div>

    {/* Image 3 */}
    <div className="relative group rounded-3xl overflow-hidden w-full flex-1">
      <img
        src="community3.png"
        alt="Service Activity 2"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="absolute inset-0 flex items-end justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white text-lg font-semibold">
          Helping Hands
        </h3>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition">
          Know More
        </button>
      </div>
    </div>

  </div>
</div>


      {/* Button */}
      <button className="
        px-10 py-3
        border border-orange-500
        text-orange-500
        rounded-full
        font-bold
        transition
        hover:bg-orange-500
        hover:text-white
      ">
        Show More
      </button>

    </section>
  );
}

export default Community;
