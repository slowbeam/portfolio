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
        <div className="project-page-description">
          <div className="project-page-description-paragraph">
            Vibelist is a Spotify music discovery tool for creating custom
            playlists in the mood and genre of the user's choice. Built with
            React, Redux, Thunk on the Frontend and a Ruby on Rails backend that
            interacts seamlessly with the Spotify API.
          </div>
        </div>
        <div className="project-links-container">
          <a href="https://github.com/slowbeam/vibe-list-client">Github</a>
          &nbsp; | &nbsp;
          <a href="https://vibelist.herokuapp.com/">Live App</a>
        </div>
      </div>
    );
  }
}

export default ProjectPage;
