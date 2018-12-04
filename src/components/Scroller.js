import React from "react";
import Canvas from "./Canvas";
import AppCardContainer from "../containers/AppCardContainer";

class Scroller extends React.Component {
  render() {
    return (
      <div className="scroller">
        <div className="page one">
          <div className="inside one">
            <div className="container">
              <Canvas />
              <div className="overlay">
                <div className="intro-text-container">
                  <h1>
                    Hi, I'm Sandy Edwards.
                    <br />
                    I'm a full-stack developer.
                  </h1>
                </div>
              </div>
              <div className="projects-button">projects</div>
              <div className="about-button">about</div>
            </div>
          </div>
        </div>

        <div className="page two">
          <div className="inside two">
            <h1>projects</h1>
            <AppCardContainer />
          </div>
        </div>
        <div className="page three">
          <div className="inside three">
            <h1>here are my blog posts</h1>
          </div>
        </div>
        <div className="page four">
          <div className="inside four">
            <h1>contact me here</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Scroller;
