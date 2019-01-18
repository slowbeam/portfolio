import React from "react";

class Menu extends React.Component {
  handleGithubClick = () => {
    const tab = window.open("https://github.com/slowbeam", "_blank");
    tab.focus();
  };
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
            onClick={() => this.props.handleMenuClick("#projects-page")}
          >
            projects
          </div>
        </div>
        <div id="about-button-shadow-container">
          <div
            className="about-button"
            onClick={() => this.props.handleMenuClick("#about-page")}
          >
            about
          </div>
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
          <div className="github-button" onClick={this.handleGithubClick}>
            <div id="github-button-text">github</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Menu;
