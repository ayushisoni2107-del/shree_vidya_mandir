import React from "react";

function Institute() {
  const columns = [
    {
      title: "Shree Vidya Prachar Mandal Kharwasa, Dholka",
      theme: "blue",
      border: "border-blue-400",
      titleBg: "bg-blue-600",
      cardTitle: "Shree C.H. Patel Saraswati Shishumandir",
      link: "SCNPShishumandir.com",
    },
    {
      title: "Shree Vidya Prachar Mandal Kalikund, Dholka",
      theme: "orange",
      border: "border-orange-400",
      titleBg: "bg-orange-500",
      cardTitle: "Shree B.S. Goswami Saraswati Shishumandir",
      link: "sbsgss.com",
    },
  ];

  return (
    <section className="w-full py-12 px-5">
      {/* HEADING */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold md:font-serif mb-3">Institute</h1>
        <p className="max-w-3xl mx-auto text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Cras posuere purus ut leo iaculis convallis.
        </p>
      </div>

      {/* COLUMNS */}
      <div className="grid md:grid-cols-2 gap-10">
        {columns.map((col, index) => (
          <div key={index} className="relative">
            {/* ATTACHED TITLE */}
            <div className={`absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 text-base font-semibold text-white rounded-full ${col.titleBg}`}>
              {col.title}
            </div>

            {/* BIG CONTAINER */}
            <div className={`border-2 ${col.border} rounded-3xl pt-10 px-8 pb-6 w-full`}>
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center justify-between bg-white rounded-xl p-5 mb-4 shadow-sm hover:bg-pink-50 hover:shadow-md transition-all duration-300">
                  <div className="flex gap-5">
                    <img src="s1.png" alt="Institute" className="w-44 h-36 rounded-lg object-cover"/>
                    <div>
                      <h4 className="text-base font-semibold text-gray-800">
                        {col.cardTitle}
                      </h4>
                      <p className="text-base text-gray-500 mt-1 leading-relaxed">
                        Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod.
                      </p>
                      <a href="#" className={`text-base font-medium ${col.theme === "blue" ? "text-blue-600" : "text-orange-500"}`}>
                        {col.link}
                      </a>
                    </div>
                  </div>
                  <span className="text-xl">→</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Institute;