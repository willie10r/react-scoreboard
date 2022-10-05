import React from 'react';


const Counter = () => {
    const [score, setScore] = React.useState(0);
  
    const incrementScore = () => {
      setScore(prevScore => prevScore + 1);
    }
  
    const decrementScore = () => {
      setScore(prevScore => prevScore - 1);
    }
  
    return (
      <div className="counter">
        <button className="couter-action decrement" onClick={() => decrementScore()}> - </button>
        <span className="couter-score">{score}</span>
        <button className="couter-action increment" onClick={() => incrementScore()}> + </button>
      </div>
    );
  
  }

  export default Counter;