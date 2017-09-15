import React from 'react';
import '../styles/Item.css';

const Item = ({ items, toggleClass, active, handleItemCleanChange }) => {

    let select1;
    let select2;
    if (items.cleanliness === 'sparkling') {
      select1 = 'dusty';
      select2 = 'rancid';
    } 
    if (items.cleanliness === 'dusty') {
      select1 = 'sparkling';
      select2 = 'rancid';
    } 
    if (items.cleanliness === 'rancid') {
      select1 = 'sparkling';
      select2 = 'dusty';
    } 

  return (
    <div className="item-container">
      <div onClick={toggleClass} className="name-container">
        <div className="key-container">
          <p className="key">name:</p>
          <p>{items.name}</p>
        </div>
      </div>
      <div className={active ? 'item-hidden' : 'item-show'}>
        <div className="key-container">
          <p className="key">reason:</p>
          <p>{items.reason}</p>
        </div>
        <div className="key-container">
          <p className="key">cleanliness:</p>
          <select name="cleanliness"
                  id={items.id}
                  onChange={handleItemCleanChange}>
            <option>{items.cleanliness}</option>
            <option>{select1}</option>
            <option>{select2}</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Item;