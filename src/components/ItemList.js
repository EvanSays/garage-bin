import React, { Component } from 'react';
import Item from './Item';
import AddItem from './AddItem'
// import PropTypes from 'prop-types';

class ItemList extends Component {
  constructor() {
    super();
      this.state = {
        items: null
      }
  }

componentDidMount() {
  fetch('/api/item')
    .then((res) => res.json())
    .then((info) => {
      this.setState({items: info.data})
    })
    .catch(function (error) {
      console.log('Request failed:', error);
    })
}

render() {
  if (!this.state.items) {
    return ( <div>
              <AddItem />
             </div> )
    } else {
      
      const item = this.state.items.map(item => {
        return <Item items={item} key={Math.round(Date.now() * Math.random())} />
    })
    return (
      <div>
        <h1>ITEM LSIT</h1>
        <AddItem />
        {item}
      </div>  
      );
    }
  }
}

// ItemList.propTypes = {

// };

export default ItemList;