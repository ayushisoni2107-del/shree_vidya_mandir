import React from "react";

function Diff() {
  return (
    <section className="py-16 px-5 text-center bg-white">

      {/* Heading */}
      <h1 className="text-2xl font-bold mb-4">
        Making Difference
      </h1>

      {/* Description */}
      <p className="max-w-3xl mx-auto mb-12 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat,
        ante eu cursus pretium. Lorem ipsum dolor sit amet, consectetur placerat,
        ante eu cursus pretium.
      </p>

      {/* Images Row */}
      <div className="flex justify-center items-center gap-8">
        <img
          src="grad.png"
          alt="Why Choose"
          className="w-1/4 "
        />

        <img
          src="development.png"
          alt="Self Development"
          className="w-1/4 "
        />

        <img
          src="spirituality.png"
          alt="Spirituality"
          className="w-1/4 "
        />

        <img
          src="alumni.png"
          alt="Alumni"
          className="w-1/4 "
        />
      </div>

    </section>
  );
}

export default Diff;
