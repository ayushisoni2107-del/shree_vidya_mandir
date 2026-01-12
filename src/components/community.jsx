import React from "react";

function Community() {
  return (
    <section className="py-16 px-5 text-center bg-white">
      
      {/* Title */}
      <h1 className="text-2xl font-bold mb-4">
        COMMUNITY SERVICES
      </h1>

      {/* Description */}
      <p className="max-w-3xl mx-auto mb-12 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat,
        ante eu cursus pretium. Lorem ipsum dolor sit amet, consectetur placerat,
        ante eu cursus pretium.
      </p>

      {/* Gallery */}
      <div className="flex gap-5 max-w-6xl mx-auto mb-10">
        
        {/* Main Image */}
        <div className="flex-[2]">
          <img
            src="community1.png"
            alt="Donation Activity"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Side Images */}
        <div className="flex-[1] flex flex-col gap-5">
          <img
            src="community2.png"
            alt="Service Activity 1"
            className="w-full h-full object-cover rounded-2xl"
          />
          <img
            src="community3.png"
            alt="Service Activity 2"
            className="w-full h-full object-cover rounded-2xl"
          />
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
