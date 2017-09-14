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
      this.handleSortChange = this.handleSortChange.bind(this)
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

handleSortChange(e) {
  const target = e.target.value;

  if (target === 'acending'){
    this.sortItems(-1, 1)
  } else if (target === 'decending') {
    this.sortItems(1, -1)
  }
}

sortItems(num1, num2) {
  const sorted = this.state.items.sort((a, b) => {
    let nameA = a.name.toLowerCase() 
    let nameB = b.name.toLowerCase()

    if (nameA < nameB) {
      return num1;
    }
    if (nameA > nameB) {
      return num2;
    }
    return 0;
  });
  this.setState({ items: sorted })
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
        <select id="sort" 
                name="sort"
                onChange={this.handleSortChange}>
          <option>acending</option>
          <option>decending</option>
        </select>
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