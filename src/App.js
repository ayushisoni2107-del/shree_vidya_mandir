import React from 'react';
import './App.css';

function App() {
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

        <img 
          src="school-building.jpg" 
          alt="School Building" 
          width="100%" height="auto" max-height="500px"  object-fit= "cover" display= "block"
        />
    
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
        <a href="#" color='white'>About Us</a>
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