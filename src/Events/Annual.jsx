import React from "react";
import "./Events.css";
import "./Annual.css"
function Annual(){
    return(
        <>
        <hr class="section-divider" />
        <div className="event-header">
        <h1>Annual function</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, ante eu cursus pretium
        </p>
      </div>
    <div   style={{ display: "flex", justifyContent: "center", gap: "15px", padding: "0 5"}}>
        <img src="event4.png" style={{width: "20%",height: "300px",borderRadius: "20px",objectFit: "cover"}}/>
        <img src="event2.png" style={{width: "20%",height: "300px",borderRadius: "20px",objectFit: "cover"}} />
        <img src="event1.png" style={{width: "20%",height: "300px",borderRadius: "20px",objectFit: "cover"}}/>
        <img src="event3.png" style={{width: "20%",height: "300px",borderRadius: "20px",objectFit: "cover"}}/>
    </div><br/>
    <div style={{ display: "flex", justifyContent: "center", gap: "15px", padding: "0 5px"}}> 
        <img src="event1.png" style={{width: "20%",height: "300px",borderRadius: "20px",objectFit: "cover"}}/>
        <img src="event3.png" style={{width: "20%",height: "300px",borderRadius: "20px",objectFit: "cover"}}/>
        <img src="event4.png" style={{width: "20%",height: "300px",borderRadius: "20px",objectFit: "cover"}}/>
        <img src="event2.png" style={{width: "20%",height: "300px",borderRadius: "20px",objectFit: "cover"}}/>
    </div>
    {/* Button */}
      <button className="show-more-btn">Show More</button>
        </>
    );
}
export default Annual;