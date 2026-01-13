import React from "react";

function Contact() {
  return (
    <>
      {/* Title */}
      <h1 className="text-center text-5xl font-semibold mt-10 md:font-serif">Contact Us</h1>

      {/* Description */}
      <p className="text-center text-gray-500 text-base md:text-lg w-11/12 md:w-3/5 mx-auto mt-3 mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere
        purus ut leo iaculis convallis. Nullam fermentum.
      </p>

      {/* Main Container */}
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden w-11/12 md:w-10/12 mx-auto mb-16">
        
        {/* Left Box */}
        <div className="relative md:w-1/3 bg-blue-700 text-white p-8 flex flex-col justify-between">
          <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
          <p className="text-base leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere
            purus ut leo iaculis convallis.
          </p>

          {/* Info Items */}
          <div className="space-y-3 text-lg">
            <div>📞 +91 98765 43210</div>
            <div>✉ spring@gmail.com</div>
            <div>📍 Lorem ipsum dolor sit amet, dolor consectetur adipiscing</div>
          </div>

          {/* Decorative Circles */}
          <span className="absolute rounded-full bg-white/20 w-52 h-52 bottom-[-60px] right-[-80px]"></span>
          <span className="absolute rounded-full bg-white/20 w-30 h-30 bottom-10 right-16"></span>

          {/* Social Icons */}
          <div className="flex gap-3 mt-8 text-2xl">
            <img src="t.png" alt="Twitter" className="w-6 h-6"/>
            <img src="y.png" alt="YouTube" className="w-6 h-6"/>
            <img src="f.png" alt="Facebook" className="w-6 h-6"/>
          </div>
        </div>

        {/* Right Form */}
        <div className="md:w-2/3 p-8 md:p-10">
          {/* Name Row */}
          <div className="flex flex-col md:flex-row gap-5 mb-5">
            <input
              type="text"
              placeholder="First Name"
              className="w-full border-b border-gray-300 px-2 py-2 text-lg outline-none focus:border-blue-500 transition"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border-b border-gray-300 px-2 py-2 text-lg outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* Email & Phone Row */}
          <div className="flex flex-col md:flex-row gap-5 mb-5">
            <input
              type="email"
              placeholder="Email"
              className="w-full border-b border-gray-300 px-2 py-2 text-lg outline-none focus:border-blue-500 transition"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border-b border-gray-300 px-2 py-2 text-lg outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* Address */}
          <input
            type="text"
            placeholder="Address"
            className="w-full border-b border-gray-300 px-2 py-2 text-lg outline-none focus:border-blue-500 transition mb-5"
          />

          {/* Message */}
          <textarea
            placeholder="Write your message"
            className="w-full border-b border-gray-300 px-2 py-2 text-lg outline-none focus:border-blue-500 transition resize-none h-24 mb-8"
          />

          {/* Submit */}
          <div className="flex flex-col items-center">
            <button className="bg-black text-white px-8 py-3 rounded-md shadow-lg hover:bg-gray-800 transition">
              Submit Message
            </button>
            <img src="aa.png" alt="arrow" className="w-1/4 mt-3 opacity-60" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
