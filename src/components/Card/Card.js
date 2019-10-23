import React from "react";
import "./style.css";

const Card = (props) => (
    <button className="card" onClick={props.handleClick}>
      <div className="img-container" id={props.id}>
        <img className="cards" alt={props.name} src={props.image} id={props.id} />
      </div>
  </button>
  ); 
  
export default Card;
