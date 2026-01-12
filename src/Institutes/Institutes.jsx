import React from "react";

function Institute() {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      {/* Page Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-3">Institute</h1>
        <p className="max-w-3xl mx-auto text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Cras posuere purus ut leo iaculis convallis.
        </p>
      </div>

      {/* Two Columns */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* LEFT */}
        <InstituteSection
          title="Shree Vidya Prachar Mandal Kharwasa, Dholka"
          color="blue"
          link="SCNPShishumandir.com"
        />

        {/* RIGHT */}
        <InstituteSection
          title="Shree Vidya Prachar Mandal Kalikund, Dholka"
          color="orange"
          link="sbsgss.com"
        />
      </div>
    </section>
  );
}

/* COLUMN */
function InstituteSection({ title, color, link }) {
  const border =
    color === "blue" ? "border-blue-400" : "border-orange-400";

  const titleColor =
    color === "blue" ? "text-blue-600" : "text-orange-500";

  return (
    <div>
      {/* TITLE OUTSIDE */}
      <h3 className={`text-sm font-semibold mb-3 ${titleColor}`}>
        {title}
      </h3>

      {/* BORDER BOX */}
      <div className={`border-2 ${border} rounded-2xl p-4`}>
        {[...Array(5)].map((_, i) => (
          <InstituteCard
            key={i}
            title={
              color === "blue"
                ? "Shree C.H. Patel Saraswati Shishumandir"
                : "Shree B.S. Goswami Saraswati Shishumandir"
            }
            link={link}
          />
        ))}
      </div>
    </div>
  );
}

/* CARD */
function InstituteCard({ title, link }) {
  return (
    <div className="flex items-center justify-between bg-white rounded-xl p-4 mb-3 shadow-sm hover:shadow-md transition">
      <div className="flex gap-4">
        <img
          src="s1.png"
          alt="Institute"
          className="w-20 h-16 rounded-lg object-cover"
        />

        <div>
          <h4 className="text-sm font-semibold text-gray-800">
            {title}
          </h4>
          <p className="text-xs text-gray-500 mt-1">
            Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod.
          </p>
          <a href="#" className="text-xs text-blue-600">
            {link}
          </a>
        </div>
      </div>

      <span>→</span>
    </div>
  );
}

export default Institute;
