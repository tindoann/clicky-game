// This page is reponsible mainly for the current score and high score 

import React from "react";
import "./style.css";

const Nav = props => (
  <nav className='Nav fixed-top bg-light'>
    <h5 className='title'>{props.children}</h5>
    <h5>Score: {props.score} | High Score: {props.highscore}</h5>
  </nav>
); 

export default Nav;
