import React from "react";

class ProjectPage extends React.Component {
  render() {
    return (
      <div id="vibelist" className="project-container">
        <div className="project-title-container">
          <div className="project-title-left-polygon" />
          <div className="project-title-text">vibelist</div>
          <div className="project-title-right-polygon" />
        </div>
        <div className="project-page-image-container">
          <img
            className="project-page-image"
            src={require("../img/vibelist-gif-2.gif")}
          />
          <img
            className="project-page-image"
            src={require("../img/vibelist-gif-3.gif")}
          />
          <img
            className="project-page-image"
            src={require("../img/vibelist-gif-4.gif")}
          />
        </div>
      </div>
    );
  }
}

export default ProjectPage;
