import React from 'react';

const Counter = ({ totals }) => {
  return (
    <div>
      <p>Total: {totals.total} </p>
      <p>Sparkling: {totals.sparkling} </p>
      <p>Dusty: {totals.dusty} </p>
      <p>Rancid: {totals.rancid} </p>
    </div>
  )
}

export default Counter;
