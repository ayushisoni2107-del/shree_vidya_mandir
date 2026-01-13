import React from "react";

function News() {
  const cards = [
    { img: "new1.png", title: "Callander and Newsletter", desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet.....` },
    { img: "new1.png", title: "Callander and Newsletter", desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet.....`},
    { img: "new1.png", title: "Callander and Newsletter", desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet.....` },
    { img: "new1.png", title: "Callander and Newsletter", desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet.....` },
  ];
  return (
    <section className="py-16 px-5 text-center bg-white">

      {/* Heading */}
      <h1 className="text-5xl font-bold md:font-serif mb-4">News Update</h1>

      {/* Description */}
      <p className="max-w-3xl mx-auto mb-12 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nunc placerat, ante eu cursus pretium. Lorem ipsum dolor sit amet.
      </p>

      {/* Images Row */}
  <div className="w-full px-4">
  <div className="grid grid-cols-4 gap-10">
    {cards.map((card, index) => (
      <div key={index} className="relative group w-full h-[420px] rounded-2xl overflow-hidden shadow-lg">
        {/* Image */}
        <img src={card.img} alt={card.text} className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-20"/>

        {/* Blue Hover Background */}
        <div className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Text Content */}
        <div className="absolute inset-0 p-8 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-y-auto">
          <h3 className="text-white text-3xl font-serif font-semibold mb-4">
            {card.title}
          </h3>

          <p className="text-white leading-relaxed whitespace-pre-line">
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
export default News;