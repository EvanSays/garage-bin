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
        <button className="close" onClick={this.toggleClass}>CLOSE DOOR</button>
        <h1 classname="title">GARAGE BIN</h1>
        <div className={this.state.active ? 'door' : 'door collapse'}>
          <h1 onClick={this.toggleClass} 
              className={this.state.active ? 'open show' : ' open hidden'}>
            OPEN
          </h1>
        </div>
        <ItemList class={this.state.active}  />
      </div>
    )
  }
}

export default App;
