import '../styles/Counter.css';
import React from 'react';

const Counter = ({ totals }) => {
  return (
    <div className="counter-container">
      <div className="key-container">
        <p className="title">Total: </p>
        <p>{totals.total} </p>
      </div>
      <div className="key-container">
        <p className="title">Sparkling: </p>
        <p>{totals.sparkling} </p>
      </div>
      <div className="key-container">
        <p className="title">Dusty: </p>
        <p>{totals.dusty} </p>
      </div>
      <div className="key-container">
        <p className="title">Rancid: </p>
        <p>{totals.rancid} </p>
      </div>
    </div>
  )
}

export default Counter;
