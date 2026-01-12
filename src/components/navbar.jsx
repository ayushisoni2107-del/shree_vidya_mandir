import { NavLink } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <>
      {/* Top blue bar */}
      <div className="w-full h-10 bg-indigo-600"></div>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-12 py-3 bg-white shadow-md">
        
        {/* Left section */}
        <div className="flex items-center">
          <img
            src="logo.png"
            alt="Logo"
            className="h-14 mr-4"
          />

          <div>
            <span className="font-bold text-indigo-900">Shree</span>
            <h2 className="text-indigo-900 text-lg font-semibold uppercase leading-tight">
              Vidhya Prachar Mandal
            </h2>
            <p className="text-orange-500 font-bold text-sm">Dholka</p>
          </div>
        </div>

        {/* Menu */}
        <ul className="flex gap-6 text-sm font-medium text-gray-700">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Institute", path: "/Institute" },
            { name: "Academics", path: "/Academics" },
            { name: "Events", path: "/Events" },
            { name: "Sports", path: "/Sports" },
            { name: "Achivement", path: "/Achivement" },
            { name: "Career", path: "/Career" },
            { name: "Contact-us", path: "/Contact" },
          ].map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end
                className={({ isActive }) =>
                  `hover:text-indigo-600 transition ${
                    isActive ? "text-indigo-600 font-semibold" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
