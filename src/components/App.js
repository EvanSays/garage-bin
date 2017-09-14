import React, { Component } from 'react';
import ItemList from './ItemList'
import '../styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      active: true,
    }
    this.toggleClass = this.toggleClass.bind(this)
  }

  toggleClass(e) {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
    
  }
  render() {

    return (
      <div className="App">
        <div className={this.state.active ? 'door' : 'door.hidden'}>
          <h1 onClick={this.toggleClass} 
            className={this.state.active ? 'h1' : 'hidden'}>
            OPEN
          </h1>
        </div>
        <ItemList class={this.state.active}  />
      </div>
    )
  }
}

export default App;
