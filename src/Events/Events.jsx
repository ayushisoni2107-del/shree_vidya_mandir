import React from "react";
import "./Events.css";

function Event() {
  return (
    <>
      {/* Header */}
      <div className="event-header">
        <h1>Events</h1>
        <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere purus ut leo iaculis convallis. Nullam fermentum odio quis
Etiam vel consectetur dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere purus ut leo iaculis convallis. Nullam fermentum odio quis Etiam vel consectetur dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
        </p>
      </div>

      {/* EVENTS */}
      <div className="event-wrapper">

        {/* TOP ROW */}
        <div className="event-row top-row">

          {/* BIG CARD */}
          <div className="event-card big-card">
            <img src="event2.png" alt="event" />
            <div className="overlay">
              <span className="badge">Upcoming · Dec 24, 2024</span>
              <h3>Lorem ipsum dolor sit amet</h3>
              <p>Sed in urna arcu. Sed elit dui.</p>
            </div>
          </div>

          {/* SMALL CARD */}
          <div className="event-card">
            <img src="event3.png" alt="event" />
            <div className="overlay">
              <h4>Annual Function</h4>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW */}
        <div className="event-row bottom-row">
          <EventSmall />
        </div>

      </div>

      {/* Button */}
      <button className="show-more-btn">Show More</button>
    </>
  );
}

function EventSmall() {
  return (
    <>
    <div className="event-card small-card">
      <img src="event1.png" alt="event" />
      <div className="overlay">
        <h4>Annual Function</h4>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </div>
     <div className="event-card small-card">
      <img src="event3.png" alt="event" />
      <div className="overlay">
        <h4>Annual Function</h4>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </div>
     <div className="event-card small-card">
      <img src="event4.png" alt="event" />
      <div className="overlay">
        <h4>Annual Function</h4>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </div>
     <div className="event-card small-card">
      <img src="event2.png" alt="event" />
      <div className="overlay">
        <h4>Annual Function</h4>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </div>
    </>
  );
}

export default Event;
