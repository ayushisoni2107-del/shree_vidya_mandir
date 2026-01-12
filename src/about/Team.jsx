import React from "react";

function Team() {
  return (
    <>
      {/* Heading Section */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-3">
          Meet the Team
        </h1>
        <p className="mx-auto w-[70%] text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat,
          ante eu cursus pretium Lorem ipsum dolor sit amet, consectetur
          placerat, ante eu cursus pretium
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center">
        <img
          src="team.png"
          alt="Team"
          className="w-[90%]"
        />
      </div>
    </>
  );
}

export default Team;
