import { NavLink } from "react-router-dom";
import React from "react";

function Footer() {
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
    {/* Instagram */}
    <div className="w-10 h-10  rounded-full flex items-center justify-center hover:scale-110 transition cursor-pointer">
      <img src="insta.png" alt="Instagram" className="w-10 h-10" />
    </div>

    {/* Facebook */}
    <div className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition cursor-pointer">
      <img src="facebook.png" alt="Facebook" className="w-10 h-10" />
    </div>

    {/* Google */}
    <div className="w-10 h-10  rounded-full flex items-center justify-center hover:scale-110 transition cursor-pointer">
      <img src="google.png" alt="Google" className="w-10 h-10" />
    </div>

    {/* Twitter / X */}
    <div className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition cursor-pointer">
      <img src="twiter.png" alt="Twitter" className="w-10 h-10" />
    </div>
  </div>
</div>


        </div>

        {/* Column 2: Links */}
        <div className="flex-1">
          <ul className="grid grid-cols-2 gap-y-3 gap-x-8 text-sm">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/institute">Institute</NavLink></li>
            <li><NavLink to="/Academics">Academics</NavLink></li>
            <li><NavLink to="/Events">Events</NavLink></li>
            <li><NavLink to="/Sports">Sports</NavLink></li>
            <li><NavLink to="/Achivement">Achivement</NavLink></li>
            <li><NavLink to="/Career">Career</NavLink></li>
            <li><NavLink to="/Contact">Contact Us</NavLink></li>
          </ul>
        </div>

        {/* Column 3: Map */}
        <div className="flex justify-end flex-1">
          <img
            src="map.png"
            alt="Map Location"
            className="w-full max-w-[350px] rounded-[15px] border-4 border-white"
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
