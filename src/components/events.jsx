  import React from "react";
  import "./Legal.css";
  import  "./Community.css";
  import "./Events.css";

function Events() {
  return (
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
  );
}

export default Events;