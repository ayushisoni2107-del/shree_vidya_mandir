import React from 'react';
import Navbar from "./components/navbar.jsx";
import './App.css';

function App() {
  return (
    <>

    
    


<section className="legacy-section">
  <h1>COMMUNITY SERVICES</h1>
  <p className="legacy-description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, ante eu cursus pretium. 
    Lorem ipsum dolor sit amet, consectetur placerat, ante eu cursus pretium.
  </p>

  <div className="community-gallery">
    <div className="gallery-main">
      <img src="community1.png" alt="Donation Activity" />
    </div>

    <div className="gallery-side">
      <img src="community2.png" alt="Service Activity 1" />
      <img src="community3.png" alt="Service Activity 2" />
    </div>
  </div>

  <button className="show-more-btn">Show More</button>
</section>

<section className="legacy-section">
  <h1>Making Difference</h1>
  <p className="legacy-description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, ante eu cursus pretium. 
    Lorem ipsum dolor sit amet, consectetur placerat, ante eu cursus pretium.
  </p>
      <div>
        <img src="grad.png" alt="Why Choose" width="25%" />
        <img src="development.png" alt="Self Development" width="25%" />
        <img src="spirituality.png" alt="Spirituality" width="25%" />
         <img src="alumni.png" alt="Alumni" width="25%" />
      </div>
  </section>

  <section className="legacy-section" >
  <h1>Events</h1>
  <p className="legacy-description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, ante eu cursus pretium. 
    Lorem ipsum dolor sit amet, consectetur placerat, ante eu cursus pretium.
  </p>

  <div className="events-container">
    {/* High */}
    <div className="event-card event-high">
      <img src="event1.png" alt="Annual Function" />
      <div className="event-info">
        <h3>Annual Function</h3>
        <p>Lorem ipsum dolor sit amet adipiscing dolor ipsum.</p>
      </div>
    </div>

    {/* Low */}
    <div className="event-card event-low">
      <img src="event2.png" alt="Annual Function" />
      <div className="event-info">
        <h3>Annual Function</h3>
        <p>Lorem ipsum dolor sit amet adipiscing dolor ipsum.</p>
      </div>
    </div>

    {/* Lowest/Center */}
    <div className="event-card event-lowest">
      <img src="event3.png" alt="Annual Function" />
      <div className="event-info">
        <h3>Annual Function</h3>
        <p>Lorem ipsum dolor sit amet adipiscing dolor ipsum.</p>
      </div>
    </div>

    {/* Low */}
    <div className="event-card event-low">
      <img src="event4.png" alt="Annual Function" />
      <div className="event-info">
        <h3>Annual Function</h3>
        <p>Lorem ipsum dolor sit amet adipiscing dolor ipsum.</p>
      </div>
    </div>

    {/* High */}
    <div className="event-card event-high">
      <img src="event4.png" alt="Annual Function" />
      <div className="event-info">
        <h3>Annual Function</h3>
        <p>Lorem ipsum dolor sit amet adipiscing dolor ipsum.</p>
      </div>
    </div>
  </div>
  <button className="show-more-btn">Show More</button>
  </section>

   <section className="legacy-section" >
  <h1>News Update</h1>
  <p className="legacy-description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, ante eu cursus pretium. 
    Lorem ipsum dolor sit amet, consectetur placerat, ante eu cursus pretium.
  </p>
  <div>
    <img src="new1.png" width="25%" />
    <img src="new1.png" width="25%" />
    <img src="new1.png" width="25%" />
    <img src="new1.png" width="25%" />
  </div>
  </section>

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