import React from 'react';

const Item = ({items}) => {
  return (
    <div>
      <p>name: {items.name}</p>
      <p>reason: {items.reason}</p>
      <p>cleanliness: {items.cleanliness}</p>
    </div>
  )
}

export default Item;