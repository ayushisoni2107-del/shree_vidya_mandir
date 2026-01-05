  import React from "react";
  import "./Legal.css";
  import "./Community.css";

function Community() {
  return (
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
    );
}
export default Community;