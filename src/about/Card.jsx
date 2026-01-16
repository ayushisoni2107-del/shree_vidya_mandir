import React from "react";

function Card() {
  return (
    <div
      className="bg-[#f9fafc] p-8 rounded-2xl text-center border border-transparent
                 transition-all duration-300 hover:border-orange-200"
    >
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">
        School Management Committee
      </h3>

      <p className="text-lg text-gray-600 leading-relaxed mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vestibulum mollis nunc a molestie dictum. Mauris venenatis,
        felis scelerisque aliquet lacinia, nulla nisi venenatis odio,
        id blandit mauris ipsum id sapien. Vestibulum malesuada orci
        sit amet pretium facilisis.
      </p>

      {/* Know More Hover */}
      <div className="flex justify-end">
      <span
        className="inline-flex items-center gap-1 text-orange-500 font-medium cursor-pointer
                   transition-all duration-300 hover:translate-x-2">
        Know More →
      </span>
      </div>
    </div>
  );
}

export default Card;
