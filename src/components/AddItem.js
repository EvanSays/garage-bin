import React, { Component } from 'react';

class AddItem extends Component {
  constructor() {
    super();
    this.state = {
      name: 'one',
      reason: 'two',
      cleanliness: 'sparkling'
    }
    this.handleAddItemClick = this.handleAddItemClick.bind(this)
  }
  
  handleAddItemClick() {
    const { name, reason, cleanliness } = this.state

    const body = Object.assign({}, { name }, { reason }, { cleanliness })

    fetch('/api/item', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((info) => console.log('info', info)
      )
      .catch(function (error) {
        console.log('Request failed:', error);
      })
}

  render() {
    return (
      <div>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="reason" />
        <input type="text" placeholder="cleanliness" />
        <button onClick={this.handleAddItemClick}>Add Item</button>
      </div>
    );
  }
}

export default AddItem;