import React, { Component } from 'react';
import '../styles/AddItem.css';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      reason: '',
      cleanliness: ''
    }
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  
  handleOnChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleOnClick() {
    this.props.handleAddItemClick(this.state);
    this.setState({
      name: '',
      reason: '',
      cleanliness: '',
    });
  }

  render() {
    const { name, reason } = this.state
    return (
      <div className="add-item">
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
        <select id="cleanliness" 
                name="cleanliness" 
                onChange={this.handleOnChange}>
          <option>cleanliness</option>
          <option>sparkling</option>
          <option>dusty</option>
          <option>rancid</option>
        </select>
        <button onClick={this.handleOnClick}>Add Item</button>
      </div>
    );
  }
}

export default AddItem;