import React from "react";
import "./History.css"
function History(){
    return(
    <>
    <h1 align="center">History</h1><br/>
   <div className="content-wrapper">
        <p className="content-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Oras posuere purus ut leo laculis convallis. 
            Nullam fermentum odio quis volutpat liber sodales elementum.  Pellentesque volutpat libero eu ex cursus lacinia, volutpat libero. 
            Etiam vel consectetur dolor. <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</strong> 
            Oras posuere purus ut leo laculis convallis. Nullam fermentum odio quis.
            <br/>Volutpat libe sodales elementum. Pellentesque volutpat libero eu ex cursus lacinia. volutpat libe Etiam vel consectetur dolor. 
        </p>
        <img
            src="school-building.jpg"
            alt="School Building"
            className="content-image"/>
    </div>
    <br/>
    <br/>
    </>
    );
}
export default History;