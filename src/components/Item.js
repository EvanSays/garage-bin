import React from 'react';
import '../styles/Item.css';

const Item = ({ items, toggleClass, active }) => {
  return (
    <div className="item-container">
      <div onClick={toggleClass} className="name-container">
        <p> name: {items.name}</p>
      </div>
      <div className={active ? 'item-hidden' : 'item-show'}>
        <p>reason: {items.reason}</p>
        <p>cleanliness: {items.cleanliness}</p>
        <div className="button-container">
          <button>Edit</button>
        </div>
      </div>
    </div>
  )
}

export default Item;