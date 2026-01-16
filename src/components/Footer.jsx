import { NavLink } from "react-router-dom";
import React from "react";

function Footer() {

  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // optional
    });
  };

  return (
    <footer className="bg-white px-5 py-10">

      {/* Blue Box */}
      <div className="bg-[#3f51b5] rounded-[25px] p-10 flex flex-col lg:flex-row justify-between gap-8 text-white">

        {/* Column 1: Logo + Social */}
        <div className="flex-1">
          <div className="flex items-center gap-4">
            <img
              src="logo.png"
              alt="Logo"
              className="w-[60px] h-[60px] bg-white rounded-full"
            />
            <div>
              <span className="font-semibold">Shree</span>
              <h4 className="uppercase text-sm font-semibold">
                Vidhya Prachar Mandal
              </h4>
              <p className="text-orange-400 font-bold">Dholka</p>
            </div>
          </div>

          <hr className="my-5 border-white/30" />

          <div className="mt-4">
            <p className="mb-2 text-sm font-semibold text-white">
              Follow us
            </p>

            <div className="flex items-center gap-4">
              <img src="insta.png" alt="Instagram" className="w-10 h-10 hover:scale-110 transition cursor-pointer" />
              <img src="facebook.png" alt="Facebook" className="w-10 h-10 hover:scale-110 transition cursor-pointer" />
              <img src="google.png" alt="Google" className="w-10 h-10 hover:scale-110 transition cursor-pointer" />
              <img src="twiter.png" alt="Twitter" className="w-10 h-10 hover:scale-110 transition cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Column 2: Links */}
        <div className="flex-1">
          <ul className="grid grid-cols-2 gap-y-3 gap-x-8 text-sm">
            <li><NavLink to="/" onClick={handleLinkClick}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={handleLinkClick}>About Us</NavLink></li>
            <li><NavLink to="/institute" onClick={handleLinkClick}>Institute</NavLink></li>
            <li><NavLink to="/Academics" onClick={handleLinkClick}>Academics</NavLink></li>
            <li><NavLink to="/Events" onClick={handleLinkClick}>Events</NavLink></li>
            <li><NavLink to="/Sports" onClick={handleLinkClick}>Sports</NavLink></li>
            <li><NavLink to="/Achivement" onClick={handleLinkClick}>Achivement</NavLink></li>
            <li><NavLink to="/Career" onClick={handleLinkClick}>Career</NavLink></li>
            <li><NavLink to="/Contact" onClick={handleLinkClick}>Contact Us</NavLink></li>
          </ul>
        </div>

        {/* Column 3: Map */}
        <div className="flex justify-end flex-1">
          <img
            src="map.png"
            alt="Map Location"
            className="w-full max-w-[600px] h-[350px] object-cover rounded-2xl border-4 border-white"
          />
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex flex-col lg:flex-row justify-between text-xs text-gray-600 mt-5 gap-3">
        <p>© 2024 All Rights Reserved SHREE VIDHYA PRACHAR MANDAL, DHOLKA</p>
        <p>Design and Develop by PRUTHATEK</p>
        <p>Privacy Policy | Copyright | Terms of Use</p>
      </div>
    </footer>
  );
}

export default Footer;
