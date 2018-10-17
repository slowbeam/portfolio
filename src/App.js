import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import AppCardContainer from './containers/AppCardContainer';
import Scroller from './components/Scroller'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Scroller />
      </div>
    );
  }
}

export default App;
