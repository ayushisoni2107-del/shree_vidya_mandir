import React from "react";
import navbar from "./legal.css";

<section className="legacy-section">
  <h1>55 Years of Legacy</h1>
  <p className="legacy-description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere purus ut leo iaculis convallis. 
    Nullam fermentum odio quis volutpat libe sodales elementum.
  </p>
  <div className="legacy-timeline">
    <div className="legacy-item">
      <div className="logo-circle">
        <img src="old-logo.jpg" alt="1969 Logo" />
      </div>
      <span className="year">1969</span>
    </div>
    <div className="legacy-arrow">→</div>
    <div className="legacy-item">
      <div className="logo-circle">
        <img src="logo.png" alt="2024 Logo" />
      </div>
      <span className="year">2024</span>
    </div>
  </div>
</section>

export default legal;