import React from "react";
import Stats from './stats';
import Stopwatch from "./Stopwatch";

const Header = (props) => {
    return (
      <header>
      <Stats players={props.players}></Stats>
        <h1>{props.title}</h1>
        <Stopwatch></Stopwatch>
      </header>
    );
  }

  export default Header;