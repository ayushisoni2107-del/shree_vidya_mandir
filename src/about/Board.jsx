import React ,{ useState } from "react";
import "./Board.css"

function Card(){
  const [showMore, setShowMore] = useState(false);
    return(
        <>
         {/* Card */}
      <div className="info-card">
        <h3>School Management Committee</h3>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vestibulum mollis nunc a molestie dictum.
          
          {/* FULL TEXT (SHOW ONLY WHEN CLICKED) */}
          {showMore && (
            <>
              {" "}
              Mauris venenatis, felis scelerisque aliquet lacinia,
              nulla nisi venenatis odio, id blandit mauris ipsum id sapien.
              Vestibulum malesuada orci sit amet pretium facilisis.
            </>
          )}
        </p>
        <span
          className="know-more"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less ↑" : "Know More →"}
        </span>

        
      </div>
      
        </>
    );
}
function Board(){
    return(
        <>
        <div><h1 align="center">Boards of Governance</h1>
         <p style={{ textAlign: "center", margin: "0 auto", width: "70%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, ante eu cursus pretium Lorem ipsum dolor sit amet, consectetur placerat, ante eu cursus pretium </p>
         </div><br/>
             <div className="card-container">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    );
}
export default Board;