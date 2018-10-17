import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import AppCardContainer from './containers/AppCardContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <AppCardContainer />
      </div>
    );
  }
}

export default App;
