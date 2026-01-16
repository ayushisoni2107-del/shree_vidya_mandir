import React from "react";

function Sport() {
  return (
    <section className="bg-white py-16">

      {/* HEADER */}
      <div className="text-center px-4 mb-12">
        <h1 className="text-5xl font-bold md:font-serif">SPORTS</h1>
        <p className="mx-auto mt-4 max-w-3xl text-gray-500 text-sm italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* ✅ GRID WRAPPER (VERY IMPORTANT) */}
      <div className="max-w-full mx-auto px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[220px]">
        {/* CARD 1 */}
        <div className="relative row-span-2 overflow-hidden shadow-md">
          <img src="s1 (2).png" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 w-full p-4 text-white bg-[#3f51b5]">
            <h3 className="font-semibold">Football</h3>
            <p className="text-xs">Tues , April 26 - 31st May 2024</p>
          </div>
        </div>

        {/* CARD 2 (TALL CENTER) */}
        <div className="relative row-span-3 overflow-hidden shadow-md">
          <img src="s2.png" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 w-full p-4 text-white bg-[#3f51b5]">
            <h3 className="font-semibold">Cricket</h3>
            <p className="text-xs">Tues , April 26 - 31st May 2024</p>
          </div>
        </div>

        <div className="relative lg:col-start-2 lg:row-start-4 row-span-2 overflow-hidden shadow-md">
          <img src="s5.png" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 w-full p-4 text-white bg-[#333333]">
            <h3 className="font-semibold">New Sport</h3>
            <p className="text-xs">Tues , April 26 - 31st May 2024</p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="relative row-span-2 overflow-hidden shadow-md">
          <img src="s3.png" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 w-full p-4 text-white bg-[#3f51b5]">
            <h3 className="font-semibold">Badminton</h3>
            <p className="text-xs">Tues , April 26 - 31st May 2024</p>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="relative row-span-2 overflow-hidden shadow-md">
          <img src="s4.png" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 w-full p-4 text-white bg-[#333333]">
            <h3 className="font-semibold">Volleyball</h3>
            <p className="text-xs">Tues , April 26 - 31st May 2024</p>
          </div>
        </div>

        {/* CARD 5 */}
        <div className="relative row-span-2 overflow-hidden shadow-md">
          <img src="s5.png" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 w-full p-4 text-white bg-[#333333]">
            <h3 className="font-semibold">Tennis</h3>
            <p className="text-xs">Tues , April 26 - 31st May 2024</p>
          </div>
        </div>

        {/* CARD 6 */}
        <div className="relative row-span-2 overflow-hidden shadow-md">
          <img src="s6.png" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 w-full p-4 text-white bg-[#f39c12]">
            <h3 className="font-semibold">Hockey</h3>
            <p className="text-xs">Tues , April 26 - 31st May 2024</p>
          </div>
        </div>

        {/* CARD 7 */}
        <div className="relative row-span-2 overflow-hidden shadow-md">
          <img src="bad.png" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 w-full p-4 text-white bg-[#f39c12]">
            <h3 className="font-semibold">Badminton</h3>
            <p className="text-xs">Tues , April 26 - 31st May 2024</p>
          </div>
        </div>

        {/* CARD 8 */}
        <div className="relative row-span-2 overflow-hidden shadow-md">
          <img src="foot.png" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 w-full p-4 text-white bg-[#f39c12]">
            <h3 className="font-semibold">Football</h3>
            <p className="text-xs">Tues , April 26 - 31st May 2024</p>
          </div>
        </div>

      </div>

      {/* BUTTON */}
       <button className="mt-8 mb-12 px-10 py-3 border-2 border-orange-500 text-orange-500 rounded-full font-bold mx-auto block hover:bg-orange-500 hover:text-white transition duration-300">
        Show More
      </button>

    </section>
  );
}

export default Sport;
