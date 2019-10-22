import React from "react";
import "./style.css";

const Nav = props => (
  <div className='Nav'>
    <div className='title'>{props.children}</div>
    <div className='score'>
      Score: {props.score} Highscore: {props.highscore}``
    </div>
  </div>
); 

export default Nav;
