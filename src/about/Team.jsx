import React from "react";

function Team() {
  const team = [
    { img: "t1 (1).png", name: "Parth Mehta", role: "Principal" },
    { img: "t1 (5).png", name: "Prachi Mehta", role: "Teacher" },
    { img: "t1 (4).png", name: "Deepak Mehta", role: "Principal" },
    { img: "t1 (3).png", name: "Aryan Arora", role: "Principal" },
    { img: "t1 (2).png", name: "Malini Soni", role: "Principal" },
  ];

  return (
    <>
      <br /><br />

      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold font-serif mb-3">
          Meet the Team
        </h1>
        <p className="mx-auto w-[70%] text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat,
          ante eu cursus pretium Lorem ipsum dolor sit amet.
        </p>
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 px-6">
        {team.map((member, index) => (
          <div
            key={index}
            className="group rounded-2xl overflow-hidden border border-gray-300 bg-white transition-all duration-300 hover:border-orange-500"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-[260px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Text */}
            <div className="text-center py-4">
              <h3 className="text-2xl font-semibold text-blue-700 transition-colors duration-300 group-hover:text-orange-500">
                {member.name}
              </h3>
              <p className="text-base font-semibold text-gray-600">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Team;
