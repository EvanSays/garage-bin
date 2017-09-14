import React, { Component } from 'react';

class AddItem extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      reason: '',
      cleanliness: ''
    }
    this.handleAddItemClick = this.handleAddItemClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
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
    this.setState({
      name: '',
      reason: '',
      cleanliness: '',
    });
}

  handleOnChange(event) {
    console.log(event.target.value);
    
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { name, reason, cleanliness } = this.state
    return (
      <div>
        <input type="text"
               name="name" 
               value={name} 
               placeholder="name" 
               onChange={this.handleOnChange} 
        />
        <input type="text"
               name="reason" 
               value={reason} 
               placeholder="reason" 
               onChange={this.handleOnChange} 
        />
        <input type="text"
               name="cleanliness" 
               value={cleanliness} 
               placeholder="cleanliness" 
               onChange={this.handleOnChange} 
        />
        <button onClick={this.handleAddItemClick}>Add Item</button>
      </div>
    );
  }
}

export default AddItem;