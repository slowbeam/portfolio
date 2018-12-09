import React from "react";
import Canvas from "./Canvas";
import AppCardContainer from "../containers/AppCardContainer";
import Footer from "./Footer";

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
              <div className="projects-button">
                <a href="#projects-page">projects</a>
              </div>
              <div className="about-button">about</div>
              <div id="blog-button-shadow-container">
                <div className="blog-button">
                  <div id="blog-button-text">blog</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="projects-page" className="page two">
          <div className="spacer">hidden text</div>
          <div className="inside two">
            <h2>projects</h2>
            <AppCardContainer />
          </div>
        </div>
        <div className="page three">
          <div className="inside three">
            <h2>here are my blog posts</h2>
          </div>
        </div>
        <div className="page four">
          <div className="inside four">
            <h2>contact me here</h2>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Scroller;
