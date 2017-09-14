import React, { Component } from 'react';
import Item from './Item'
import PropTypes from 'prop-types';

class ItemList extends Component {
  constructor() {
    super();
      this.state = {
        items: null
      }
  }

componentDidMount() {
  fetch('http://localhost:3000/api/item')
    .then((res) => res.json())
    .then((info) => {
      this.setState({items: info.data})
    console.log('info', info.data);
    })
    .catch(function (error) {
      console.log('Request failed:', error);
    })
}

render() {
  if (!this.state.items) {
    return ( <div></div> )
    } else {
      const item = this.state.items.map(item => {
        return <Item items={item}/>
    })
    return (
      <div>
        <h1>ITEM LSIT</h1>
        {item}
      </div>
      );
    }
  }
}

// ItemList.propTypes = {

// };

export default ItemList;