import React from "react";
import "./Contact.css"
function contact(){
    return(
        <>
        <h1 className="contact-title">Contact Us</h1>
      <p className="contact-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere
        purus ut leo iaculis convallis. Nullam fermentum.
      </p>

      {/* Main Container */}
      <div className="contact-wrapper">
        {/* Left Box */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere
            purus ut leo iaculis convallis.
          </p>

          <div className="info-item">
            📞 +91 98765 43210
          </div>

          <div className="info-item">
            ✉ spring@gmail.com
          </div>

          <div className="info-item">
            📍 Lorem ipsum dolor sit amet, dolor consectetur adipiscing
          </div>

            {/* Decorative circles */}
            <span className="circle big"></span>
            <span className="circle small"></span>

          <div className="social-icons">
            <span><img src="t.png"/></span>
            <span><img src="y.png"/></span>
            <span><img src="f.png"/></span>
          </div>
        </div>

        {/* Right Form */}
        <div className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>

          <div className="form-row">
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Phone Number" />
          </div>

          <input type="text" placeholder="Address" className="full-width" />

          <textarea placeholder="Write your message"></textarea>

          <div className="submit-wrapper">
            <button>Submit Message</button>
            <img src="aa.png" alt="arrow" className="arrow-img" />
        </div>
        </div>
      </div>

        </>
    );
}
export default contact;