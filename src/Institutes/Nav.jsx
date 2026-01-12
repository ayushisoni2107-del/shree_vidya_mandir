import { NavLink } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <>
      {/* Top Header */}
      <div className="flex justify-between items-center px-10 py-3 bg-white border-b border-gray-300">
        {/* Left Logo Section */}
        <div className="flex items-center">
          <img src="logo.png" alt="Logo" className="h-16 mr-3" />
          <div className="leading-tight">
            <span className="text-sm font-bold text-indigo-900">Shree</span>
            <h2 className="text-lg text-indigo-900 m-0">Vidhya Prachar Mandal</h2>
            <p className="text-orange-600 font-bold text-sm m-0">Dholka</p>
          </div>
        </div>

        {/* Navigation Menu */}
        <ul className="flex gap-4 list-none">
          <li>
            <NavLink to="/" className={({ isActive }) => `text-gray-800 text-sm font-medium ${
                isActive ? "text-indigo-900 border-b-2 border-indigo-900 pb-1" : "hover:text-indigo-900"}`}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => `text-gray-800 text-sm font-medium ${
                  isActive ? "text-indigo-900 border-b-2 border-indigo-900 pb-1" : "hover:text-indigo-900"}`}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/Institute" className={({ isActive }) =>`text-gray-800 text-sm font-medium ${
                  isActive ? "text-indigo-900 border-b-2 border-indigo-900 pb-1" : "hover:text-indigo-900"}`}>
              Institutes
            </NavLink>
          </li>
          <li>
            <NavLink to="/Academics" className={({ isActive }) =>`text-gray-800 text-sm font-medium ${
                  isActive ? "text-indigo-900 border-b-2 border-indigo-900 pb-1" : "hover:text-indigo-900"}`}>
              Academics
            </NavLink>
          </li>
          <li>
            <NavLink to="/Events" className={({ isActive }) =>`text-gray-800 text-sm font-medium ${
                  isActive ? "text-indigo-900 border-b-2 border-indigo-900 pb-1" : "hover:text-indigo-900"}`}>
              Events
            </NavLink>
          </li>
          <li>
            <NavLink  to="/Sports"className={({ isActive }) =>`text-gray-800 text-sm font-medium ${
                  isActive ? "text-indigo-900 border-b-2 border-indigo-900 pb-1" : "hover:text-indigo-900" }`}>
              Sports
            </NavLink>
          </li>
          <li>
            <NavLink to="/Achivement"className={({ isActive }) =>`text-gray-800 text-sm font-medium ${
                  isActive ? "text-indigo-900 border-b-2 border-indigo-900 pb-1" : "hover:text-indigo-900" }`}>
              Achievement
            </NavLink>
          </li>
          <li>
            <NavLink to="/Career"  className={({ isActive }) => `text-gray-800 text-sm font-medium ${
                  isActive ? "text-indigo-900 border-b-2 border-indigo-900 pb-1" : "hover:text-indigo-900"}`}>
              Careers
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact" className={({ isActive }) =>`text-gray-800 text-sm font-medium ${
                  isActive ? "text-indigo-900 border-b-2 border-indigo-900 pb-1" : "hover:text-indigo-900" }`}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Blue Bar */}
      <div className="bg-indigo-600 h-11 flex justify-end items-center px-10">
        <div>
          <input type="text" placeholder="Search" className="px-3 py-1 rounded-md outline-none w-52 text-sm"/>
        </div>
      </div>
    </>
  );
};

export default Navbar;
