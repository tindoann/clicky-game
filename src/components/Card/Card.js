import React from "react";
import "./style.css";

const Card = (props) => (
    <button className="card" onClick={props.handleClick}>
      <div className="img-container">
        <img alt={props.name} src={props.image} value={props.id} />
      </div>
  </button>
  ); 
  
export default Card;
