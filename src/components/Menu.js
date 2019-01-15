import React from "react";

class Menu extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="overlay-container">
          <div className="overlay">
            <div className="intro-text-container">
              <h1>
                Hi, I'm Sandy Edwards.
                <br />
                I'm a full-stack developer.
              </h1>
            </div>
          </div>
        </div>
        <div id="projects-button-container">
          <div
            className="projects-button"
            onClick={() => this.props.handleMenuClick(".page.two")}
          >
            projects
          </div>
        </div>
        <div id="about-button-shadow-container">
          <div className="about-button">about</div>
        </div>
        <div id="blog-button-shadow-container">
          <div
            className="blog-button"
            onClick={() => this.props.handleMenuClick("#blog-page")}
          >
            <div id="blog-button-text">blog</div>
          </div>
        </div>
        <div id="contact-button-shadow-container">
          <div
            className="contact-button"
            onClick={() => this.props.handleMenuClick("#contact-page")}
          >
            <div id="contact-button-text">contact</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Menu;
