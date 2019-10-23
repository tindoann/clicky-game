// This page is reponsible mainly for the current score and high score 

import React from "react";
import "./style.css";

const Nav = props => (
  <nav className='Nav fixed-top bg-light'>
    <h4 className='title'>{props.children}</h4>
    <h4>{props.message}</h4>
    <h4>Score: {props.score} | High Score: {props.highscore}</h4>
  </nav>
); 

export default Nav;
