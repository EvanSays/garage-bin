import React from 'react';
import '../styles/Item.css';

const Item = ({items}) => {
  return (
    <div className="item-container">
      <p>name: {items.name}</p>
      <p>reason: {items.reason}</p>
      <p>cleanliness: {items.cleanliness}</p>
      <button>Edit</button>
    </div>
  )
}

export default Item;