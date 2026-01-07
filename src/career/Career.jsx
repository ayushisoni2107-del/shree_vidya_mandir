import React from "react";

function career1(){
return(
    <>
      <div>
        <h1 align="center">Career</h1>
        
        <p className="career-desc">
        Etiam vel consectetur dolor. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Cras posuere purus ut leo iaculis convallis. Nullam
        fermentum odio quis consectetur dolor.
      </p>

      {/* Job Cards Grid */}
      <div className="career-grid">
        {/* CARD */}
        <div className="job-card">
          <img src="logo.png" alt="school logo" className="job-logo" />

          <div className="job-info">
            <h4>Science Teacher</h4>
            <p className="school-name">
              Shree C.N. Patel Saraswati ShishuMandir
            </p>

            <div className="job-meta">
              <span>0–2 Years</span>
              <span>•</span>
              <span>Lorem ipsum dolor sit amet</span>
            </div>

            <a href="#" className="apply-link">
              Apply Now
            </a>
          </div>
        </div>

        {/* Duplicate cards */}
        <div className="job-card">
          <img src="logo.png" alt="school logo" className="job-logo" />
          <div className="job-info">
            <h4>Science Teacher</h4>
            <p className="school-name">
              Shree C.N. Patel Saraswati ShishuMandir
            </p>
            <div className="job-meta">
              <span>0–2 Years</span>
              <span>•</span>
              <span>Lorem ipsum dolor sit amet</span>
            </div>
            <a href="#" className="apply-link">Apply Now</a>
          </div>
        </div>
      </div>
      </div>
    </>
);
}
export default career1;