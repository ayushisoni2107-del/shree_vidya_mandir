import React from "react";

function Diff() {
  const cards = [
    { img: "grad.png", title: "Why Choose SVKM ?", desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Lorem ipsum dolor sit amet,
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,` },

    { img: "development.png", title: "Self development", desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Lorem ipsum dolor sit amet,
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,`},
    { img: "spirituality.png", title: "Spiritual", desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Lorem ipsum dolor sit amet,
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,` },
    { img: "alumni.png", title: "Alumni", desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Lorem ipsum dolor sit amet,
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,` },
  ];

  return (
    <section className="py-16 px-5 text-center bg-white overflow-x-hidden">

      <h1 className="text-5xl font-bold md:font-serif mb-4">
        Making Difference
      </h1>

      <p className="max-w-3xl mx-auto mb-12 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-10 w-max px-4">

          {cards.map((card, index) => (
            <div
              key={index}
              className="relative group w-[450px] h-[420px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Image */}
              <img
                src={card.img}
                alt={card.text}
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-20"
              />

          {/* White Hover Background */}
<div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

{/* Text Content */}
<div className="absolute inset-0 p-8 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-y-auto">
  <h3 className="text-black text-3xl font-serif font-semibold mb-4">
    {card.title}
  </h3>

  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
    {card.desc}
  </p>
</div>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
}

export default Diff;
