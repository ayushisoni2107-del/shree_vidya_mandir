import React from "react";
import navbar from "./navbar.css";
function Navbar() {
  return (
    <>
      <div className="top-bar"></div>
      <nav className="navbar">
        <div className="nav-left">
          <img src="logo.png" alt="Logo" className="logo-img" />
          <div className="title">
            <span className="shree-text">Shree</span>
            <h2 className="main-title">Vidhya Prachar Mandal</h2>
            <p className="location-text">Dholka</p>
          </div>
        </div>
        <ul className="nav-menu">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Institutes</a></li>
          <li><a href="#">Academics</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Sports</a></li>
          <li><a href="#">Achievement</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
    </>
  );
}
export default navbar;