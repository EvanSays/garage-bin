import React, { Component } from 'react';
import Item from './Item';
import AddItem from './AddItem';
import Counter from './Counter';
import '../styles/ItemList.css';

class ItemList extends Component {
  constructor() {
    super();
      this.state = {
        items: [],
        order: 'decending',
        totals: {}
      }
    this.handleSortChange = this.handleSortChange.bind(this);
    this.handleAddItemClick = this.handleAddItemClick.bind(this);
    this.sortConditional = this.sortConditional.bind(this);
    this.calculateTotals = this.calculateTotals.bind(this);
  }

componentDidMount() {
  // const { order } = this.state;
  fetch('/api/item')
    .then((res) => res.json())
    .then((info) => {
      this.setState({ items: info.data })
      this.calculateTotals(info.data)
      // this.sortConditional(order)
    })
    .catch(function (error) {
      console.log('Request failed:', error);
    })
}

calculateTotals(array) {
  const totals = array.reduce((total, item) => {
    if (!total[item.cleanliness]) {
      total[item.cleanliness] = 1
    } else {
      total[item.cleanliness] ++
    }
    return total
  },{})
const totalObj = Object.assign({}, {total: array.length}, totals)
this.setState({totals: totalObj})
}

handleSortChange(e) {
  const { order } = this.state;
  const target = e.target.value;
  this.setState({ order: target })
  this.sortConditional(order)
}

sortConditional(order) {
  if (order === 'acending') {
    this.sortItems(-1, 1)
  } else if (order === 'decending') {
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

  handleAddItemClick(obj) {
    const { items, order } = this.state;
    fetch('/api/item', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((info) => console.log('info', info)
      )
      .catch(function (error) {
        console.log('Request failed:', error);
      })
    const newItems = items
    newItems.push(obj)
    this.setState({ items: newItems })
    this.sortConditional(order)
  }

render() {
  const { items, totals} = this.state;

  if (!items) {
    return ( <div>
              <AddItem />
             </div> )
    } else {
      const item = items.map(item => {
        return <Item items={item} key={Math.round(Date.now() * Math.random())} />
    })


    return (
      <div className="item-list-container">
        <Counter totals={totals} />
        <select id="sort" 
                name="sort"
                onChange={this.handleSortChange}>
          <option>decending</option>
          <option>acending</option>
        </select>
        <AddItem handleAddItemClick={this.handleAddItemClick}/>
        {item}
      </div>  
      );
    }
  }
}

export default ItemList;