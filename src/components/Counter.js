import React from 'react';


const Counter = (props) => {

  
    return (
      <div className="counter">
        <button className="couter-action decrement" onClick={() => props.changeScore(props.id, -1)}> - </button>
        <span className="couter-score">{props.score}</span>
        <button className="couter-action increment" onClick={() => props.changeScore(props.id, +1)}> + </button>
      </div>
    );
  
  }

  export default Counter;