import React, { Component } from 'react';
import './App.css';
import Scroller from './components/Scroller'

class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="triangle-topleft">
        </div>
        <Scroller />
      </div>
    );
  }
}

export default App;
