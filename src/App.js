import React, { Component } from "react";
import "./App.css";
import Scroller from "./components/Scroller";

class App extends Component {

  componentDidMount() {
    window.addEventListener('load', this.handlePageLoad);
  }

  handlePageLoad = () => {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove("preload");
  }

  render() {
    return (
      <div className="App">
        <Scroller />
      </div>
    );
  }
}

export default App;
