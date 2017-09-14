import React, { Component } from 'react';
import Item from './Item'
import PropTypes from 'prop-types';

class ItemList extends Component {
  render() {
    return (
      <div>
        <h1>ITEM LSIT</h1>
        <Item />
      </div>
    );
  }
}

ItemList.propTypes = {

};

export default ItemList;