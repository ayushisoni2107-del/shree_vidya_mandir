import { NavLink, Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-indigo-600 h-[50px] flex items-center">
        <div className="w-full flex justify-end items-center gap-5 pr-5">
          
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <img src="in.png" alt="Instagram" className="h-5" />
            <img src="fac.png" alt="Facebook" className="h-5" />
            <img src="lin.png" alt="LinkedIn" className="h-5" />
            <img src="se (1).png" alt="Search" className="h-5" />
          </div>

          {/* Alumni Button */}
          <Link to="/Alumni">
            <button className="h-[50px] px-6 bg-orange-500 text-white text-sm font-bold hover:bg-orange-600 transition">
              Alumni
            </button>
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="flex justify-between items-center px-12 py-3 bg-white border-b-4 border-indigo-600">
        
        {/* Left Logo */}
        <div className="flex items-center">
          <img src="logo.png" alt="Logo" className="h-16 mr-4" />
          
          <div className="leading-tight">
            <span className="block text-sm font-bold text-indigo-900">
              Shree
            </span>
            <h2 className="text-lg font-semibold uppercase text-indigo-900">
              Vidhya Prachar Mandal
            </h2>
            <p className="text-sm font-bold text-orange-500">
              Dholka
            </p>
          </div>
        </div>

        {/* Menu */}
        <ul className="flex gap-6 list-none">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Institute", path: "/Institute" },
            { name: "Academics", path: "/Academics" },
            { name: "Events", path: "/Events" },
            { name: "Sports", path: "/Sports" },
            { name: "Achievement", path: "/Achivement" },
            { name: "Career", path: "/Career" },
            { name: "Contact Us", path: "/Contact" },
          ].map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                end
                className={({ isActive }) =>
                  `text-sm font-medium pb-1 ${
                    isActive
                      ? "text-indigo-600 border-b-2 border-indigo-600"
                      : "text-gray-700 hover:text-indigo-600"
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
