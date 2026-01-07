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
        {/* Image */}
        <img src="ac1.png" alt="Achievement" className="img"/>

        {/* Content */}
        <div style={{ padding: "25px",width: "55%",}}>
          <span style={{backgroundColor: "#222",color: "#fff",padding: "4px 12px",borderRadius: "20px",fontSize: "12px",
            display: "inline-block",marginBottom: "10px",}}>
            Faculty
          </span>

          <h3 style={{ margin: "10px 0" }}>
            Lorem ipsum dolor sit amet
          </h3>

          <p style={{ fontSize: "14px", color: "#777", lineHeight: "1.6" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere
            purus ut leo iaculis convallis. Nullam fermentum odio quis Etiam vel
            consectetur dolor.
          </p>
        </div>
      </div>
        </>
    );
}
export default achive;