import React from 'react';
import Navbar from "./components/navbar.jsx";
import './App.css';

function App() {
  return (
    <>

    
    





  



<footer className="main-footer">
  <div className="footer-blue-box">
    {/* Column 1: Logo and Socials */}
    <div flex="1">
      <div className="footer-logo-row">
        <img src="logo.png" alt="Logo" className="footer-logo" />
        <div className="footer-title">
          <span>Shree</span>
          <h4>Vidhya prachar Mandal</h4>
          <p className="orange-text">Dholka</p>
        </div>
      </div>
      <hr className="footer-divider" />
      <div>
        <p>Follow us</p>
        <div>
        <img src="icon.png"/>
        </div>
      </div>
    </div>

    {/* Column 2: Navigation Links */}
    <div className="footer-col links-grid">
      <div className="link-column">
        <a href="#">About Us</a>
        <a href="#">Institutes</a>
        <a href="#">Academics</a>
        <a href="#">Events</a>
        <a href="#">Sports</a>
        <a href="#">Achievement</a>
        <a href="#">Career</a>
        <a href="#">Contact Us</a>
      </div>
    </div>

      <img src="map.png" alt="Map Location" width="25%" border-radius= "25%" />
  </div>

  <div className="footer-bottom">
    <p>© 2024 All Rights Reserved SHREE VIDHYA PRACHAR MANDAL, DHOLKA</p>
    <p>Design and Develop by PRUTHATEK</p>
    <p>Privacy Policy | Copyright | Terms of Use</p>
  </div>
</footer>
    </>
  );
}

export default App;