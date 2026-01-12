import React from "react";

function Achive() {
  return (
    <>
      <h1 className="text-center text-3xl font-semibold mt-8">Achievements</h1>
      <p className="text-center text-gray-500 text-sm leading-relaxed mx-auto w-11/12 md:w-7/12 mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere purus ut leo iaculis convallis.
        Nullam fermentum odio quis Etiam vel consectetur dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras posuere purus ut leo iaculis convallis. Nullam fermentum odio quis Etiam vel consectetur dolor.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className="flex justify-center gap-10 mt-6">
        <span className="text-orange-500 font-semibold">/All</span>
        <span className="text-gray-300">/Faculty</span>
        <span className="text-gray-300">/Student</span>
      </div>

      {/* Achievement Card 1 */}
      <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden w-11/12 md:w-9/12 mx-auto mt-8">
        <img src="ac1.png" alt="Achievement" className="w-full md:w-3/5 h-64 object-cover" />
        <div className="p-6 md:w-2/5">
          <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-xs inline-block mb-3">Faculty</span>
          <h3 className="text-lg font-semibold mb-2">Lorem ipsum dolor sit amet</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere
            purus ut leo iaculis convallis. Nullam fermentum odio quis Etiam vel
            consectetur dolor.
          </p>
        </div>
      </div>

      {/* Achievement Card 2 */}
      <div className="flex flex-col md:flex-row-reverse bg-white rounded-xl shadow-lg overflow-hidden w-11/12 md:w-9/12 mx-auto mt-8">
        <img src="ac2.png" alt="Achievement" className="w-full md:w-3/5 h-64 object-cover" />
        <div className="p-6 md:w-2/5">
          <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-xs inline-block mb-3">Student</span>
          <h3 className="text-lg font-semibold mb-2">Lorem ipsum dolor sit amet</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere
            purus ut leo iaculis convallis. Nullam fermentum odio quis Etiam vel
            consectetur dolor.
          </p>
        </div>
      </div>

      {/* Achievement Card 3 */}
      <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden w-11/12 md:w-9/12 mx-auto mt-8">
        <img src="ac1.png" alt="Achievement" className="w-full md:w-3/5 h-64 object-cover" />
        <div className="p-6 md:w-2/5">
          <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-xs inline-block mb-3">Faculty</span>
          <h3 className="text-lg font-semibold mb-2">Lorem ipsum dolor sit amet</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere
            purus ut leo iaculis convallis. Nullam fermentum odio quis Etiam vel
            consectetur dolor.
          </p>
        </div>
      </div>

      {/* Achievement Card 4 */}
      <div className="flex flex-col md:flex-row-reverse bg-white rounded-xl shadow-lg overflow-hidden w-11/12 md:w-9/12 mx-auto mt-8 mb-12">
        <img src="ac2.png" alt="Achievement" className="w-full md:w-3/5 h-64 object-cover" />
        <div className="p-6 md:w-2/5">
          <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-xs inline-block mb-3">Student</span>
          <h3 className="text-lg font-semibold mb-2">Lorem ipsum dolor sit amet</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere
            purus ut leo iaculis convallis. Nullam fermentum odio quis Etiam vel
            consectetur dolor.
          </p>
        </div>
      </div>
    </>
  );
}

export default Achive;
