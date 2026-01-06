import React from "react";
import "./Events.css"

function Event(){
    return(
        <>
         <div> <h1 align="center"> Events</h1>
        <p style={{ textAlign: "center", margin: "0 auto", width: "70%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere purus ut leo iaculis convallis. Nullam fermentum odio quis
Etiam vel consectetur dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere purus ut leo iaculis convallis. Nullam fermentum odio quis Etiam vel consectetur dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.   </p>
        </div><br/>
 {/* Events Grid */}
      <div className="event-layout">

        {/* BIG CARD */}
        <div className="event-card big">
          <img src="event2.png" alt="event" />
          <div className="overlay">
            <span className="badge">Upcoming · Dec 24, 2024</span>
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>Sed in urna arcu. Sed elit dui.</p>
          </div>
        </div>

        {/* RIGHT TOP */}
        <div className="event-card">
          <img src="event1.png" alt="event" />
          <div className="overlay">
            <h4>Annual Function</h4>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <EventSmall />
        <EventSmall />
        <EventSmall />
        <EventSmall />

      </div>


      </>
    );
}

function EventSmall() {
  return (
    <>
    <div className="event-card">
      <img src="event3.png" alt="event" />
      <div className="overlay">
        <h4>Annual Function</h4>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </div>
          {/* Button */}
      <button className="show-more-btn">Show More</button>
      </>
  );
}
export default Event;