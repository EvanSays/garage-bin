import React, { Component } from 'react';
import ItemList from './ItemList'
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ItemList />
      </div>
    );
  }
}

export default App;
