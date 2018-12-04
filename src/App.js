import React, { Component } from 'react';
import './App.css';
import Scroller from './components/Scroller';
import AudioButton from './components/AudioButton';

class App extends Component {


  render() {
    return (
      <div className="App">
        <AudioButton />
        <Scroller />
      </div>
    );
  }
}

export default App;
