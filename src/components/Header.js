import React from "react";
import PropTypes from 'prop-types';
import Stats from './stats';
import Stopwatch from "./Stopwatch";

const Header = ({players, title}) => {
    return (
      <header>
      <Stats players={players}></Stats>
        <h1>{title}</h1>
        <Stopwatch></Stopwatch>
      </header>
    );
  }
  Header.propTypes = {
    title: PropTypes.string,
    players: PropTypes.arrayOf(PropTypes.object)

  };

  export default Header;