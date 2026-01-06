import React from "react";
import "./Academics.css"
function Academics(){
    return(
        <>
        <div> <h1 align="center"> Facilities & Services</h1>
        <p style={{ textAlign: "center", margin: "0 auto", width: "70%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere purus ut leo iaculis convallis. Nullam fermentum odio quis
Etiam vel consectetur dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere purus ut leo iaculis convallis. Nullam fermentum odio quis Etiam vel consectetur dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
        </div><br/>
        <div>
            <img src="a1.png" width="85%"  style={{ display: "block", margin: "0 auto" }}/>
            <img src="a1.png" width="85%"  style={{ display: "block", margin: "0 auto" }}/>
            <img src="a1.png" width="85%"  style={{ display: "block", margin: "0 auto" }}/>
        </div>
        <button className="show-more-btn" align="center">Show More</button>
        </>
    );

}
export default Academics;