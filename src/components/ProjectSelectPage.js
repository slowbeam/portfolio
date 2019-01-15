import React from "react";

class ProjectSelectPage extends React.Component {
  handleProjectButtonEnter = event => {
    const buttonIdArr = event.target.id.split("-");
    const projectImageIdArr = buttonIdArr.slice(0, buttonIdArr.length - 1);
    const projectImageId = projectImageIdArr.join("-") + "-gif";
    const projectImageDiv = document.getElementById(projectImageId);
    projectImageDiv.style.visibility = "visible";
  };

  handleProjectButtonExit = event => {
    const buttonIdArr = event.target.id.split("-");
    const projectImageIdArr = buttonIdArr.slice(0, buttonIdArr.length - 1);
    const projectImageId = projectImageIdArr.join("-") + "-gif";
    const projectImageDiv = document.getElementById(projectImageId);
    projectImageDiv.style.visibility = "hidden";
  };

  render() {
    return (
      <div className="projects-selection-container">
        <div id="projects-top-triangle-right" />
        <div id="projects-top-triangle-left" />
        <div id="projects-title-shadow-container">
          <div id="projects-title">
            <div id="projects-title-text">
              <h2>projects</h2>
            </div>
          </div>
        </div>
        <div className="project-select-grid">
          <div className="project-image" id="vibelist-gif">
            <img
              className="project-gif"
              src={require("../img/vibelist-gif-2.gif")}
              alt="demo of vibelist application"
            />
          </div>
          <div className="project-image" id="birthify-gif">
            <img
              className="project-gif"
              src={require("../img/bf-2.gif")}
              alt="demo of birthify application"
            />
          </div>
          <div className="project-image" id="beat-machine-gif">
            <img
              className="project-gif"
              src={require("../img/bm-1.gif")}
              alt="demo of beat machine application"
            />
          </div>

          <div
            id="vibelist-button"
            className="project-select-button"
            onClick={() => this.props.handleMenuClick("#vibelist")}
            onMouseEnter={this.handleProjectButtonEnter}
            onMouseLeave={this.handleProjectButtonExit}
          >
            vibelist
          </div>
          <div
            id="birthify-button"
            className="project-select-button"
            onClick={() => this.props.handleMenuClick("#birthify")}
            onMouseEnter={this.handleProjectButtonEnter}
            onMouseLeave={this.handleProjectButtonExit}
          >
            Birthify
          </div>
          <div
            id="beat-machine-button"
            className="project-select-button"
            onClick={() => this.props.handleMenuClick("#beat-machine")}
            onMouseEnter={this.handleProjectButtonEnter}
            onMouseLeave={this.handleProjectButtonExit}
          >
            Beat-Machine
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectSelectPage;
