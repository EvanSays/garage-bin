import React from 'react';

const Item = ({items}) => {
  return (
    <div>
      <p>{items.name}</p>
      <p>{items.reason}</p>
      <p>{items.cleanliness}</p>
    </div>
  )
}

export default Item;