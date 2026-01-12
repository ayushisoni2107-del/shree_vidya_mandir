import React, { useState } from "react";

function Card() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-[#f9fafc] p-5 rounded-xl shadow-md text-center">
      <h3 className="text-base font-semibold mb-2">
        School Management Committee
      </h3>

      <p className="text-sm text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vestibulum mollis nunc a molestie dictum.
        {showMore && (
          <>
            {" "}
            Mauris venenatis, felis scelerisque aliquet lacinia,
            nulla nisi venenatis odio, id blandit mauris ipsum id sapien.
            Vestibulum malesuada orci sit amet pretium facilisis.
          </>
        )}
      </p>

      <span
        onClick={() => setShowMore(!showMore)}
        className="inline-block mt-3 text-orange-500 font-medium cursor-pointer hover:underline"
      >
        {showMore ? "Show Less ↑" : "Know More →"}
      </span>
    </div>
  );
}

export default Card;
