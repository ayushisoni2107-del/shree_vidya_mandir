import React from "react";
import "./Institute.css"
function Institute(){
    return(
        <>
           <div><h1 align ="center">Institute</h1><br/>
           <p style={{ textAlign: "center", margin: "0 auto", width: "70%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere purus ut leo iaculis convallis. Nullam fermentum odio quis
Etiam vel consectetur dolor.</p>
           </div>
                  {/* Institute Columns */}
      <div className="institute-container">

        {/* LEFT COLUMN */}
        <div className="institute-column blue">
          <div className="column-title blue-title">
            Shree Vidya Prakar Mandir Kharwasa, Dholka
          </div>

          <InstituteCard />
          <InstituteCard />
          <InstituteCard />
          <InstituteCard />
        </div>

        {/* RIGHT COLUMN */}
        <div className="institute-column orange">
          <div className="column-title orange-title">
            Shree Vidya Prakar Mandir Kharwasa, Dholka
          </div>

          <InstituteCard />
          <InstituteCard />
          <InstituteCard />
          <InstituteCard />
        </div>
      </div>
    </>
  );
}
    function InstituteCard() {
  return (
    <div className="institute-card">
      <img src="s1.png" alt="Institute" />

      <div className="card-content">
        <h4>Shree C.H. Patel Sarswati Shikshanmandir</h4>
        <p>Primary School</p>
        <a href="#">school@gmail.com</a>
      </div>
    </div>
  );
}
export default Institute;