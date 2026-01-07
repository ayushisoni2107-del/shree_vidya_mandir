import React from "react";
import "./Achive.css"
function achive() {
    return(
        <>
        <h1 align="center "> Achievements</h1>
        <p style={{textAlign: "center", width: "70%", margin: "0 auto", fontSize: "14px", lineHeight: "1.6",color: "#777"}}>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere purus ut leo iaculis convallis. 
       Nullam fermentum odio quis Etiam vel consectetur dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
       Cras posuere purus ut leo iaculis convallis. Nullam fermentum odio quis Etiam vel consectetur dolor. 
       Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
      </p><br/>
        <div style={{ display: "flex",justifyContent: "center",gap: "40px" }}>
            <span style={{ color: "#ff7a00", fontWeight: "600" }}>/All</span>
            <span style={{ color: "#ccc" }}>/Faculty</span>
            <span style={{ color: "#ccc" }}>/Student</span>
        </div><br/><br/>

    <div className="image-style">
      <img src="ac1.png" alt="Achievement" className="img" />
      <div className="content">
        <span className="tag">Faculty</span>
        <h3>Lorem ipsum dolor sit amet</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere
          purus ut leo iaculis convallis. Nullam fermentum odio quis Etiam vel
          consectetur dolor.
        </p>
      </div>
    </div><br/>
      <div className="image-style">
      <div className="content">
        <span className="tag">Student</span>
        <h3>Lorem ipsum dolor sit amet</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere
          purus ut leo iaculis convallis. Nullam fermentum odio quis Etiam vel
          consectetur dolor.
        </p>
      </div>
      <img src="ac2.png" alt="Achievement" className="img" />
    </div>
        </>
    );
}
export default achive;