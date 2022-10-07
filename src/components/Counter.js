import React from 'react';
import PropTypes from 'prop-types';


const Counter = ({score, id, changeScore}) => {

  
    return (
      <div className="counter">
        <button className="couter-action decrement" onClick={() => changeScore(id, -1)}> - </button>
        <span className="couter-score">{score}</span>
        <button className="couter-action increment" onClick={() => changeScore(id, +1)}> + </button>
      </div>
    );
  
  }
  Counter.propTypes = {
    id: PropTypes.number,
    score: PropTypes.number,
    changeScore: PropTypes.func

  };

  export default Counter;