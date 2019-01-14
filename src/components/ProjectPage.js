import React from "react";
import uuid from "uuid";

class ProjectPage extends React.Component {
  renderProjectImages = () => {
    const imagesDup = [...this.props.images];

    return imagesDup.map(image => (
      <img
        className="project-page-image"
        src={image}
        alt="demo of project"
        key={uuid()}
      />
    ));
  };
  render() {
    return (
      <div id="vibelist" className="project-container">
        <div className="project-title-container">
          <div className="project-title-left-polygon" />
          <div className="project-title-text">{this.props.name}</div>
          <div className="project-title-right-polygon" />
        </div>
        <div className="project-page-image-container">
          {this.renderProjectImages()}
        </div>
        <div className="project-page-description">
          <div className="project-page-description-paragraph">
            {this.props.description}
          </div>
        </div>
        <div className="project-links-container">
          <a href="https://github.com/slowbeam/vibe-list-client">
            {Object.keys(this.props.links)[0]}
          </a>
          &nbsp; | &nbsp;
          <a href="https://vibelist.herokuapp.com/">
            {Object.keys(this.props.links)[1]}
          </a>
        </div>
      </div>
    );
  }
}

export default ProjectPage;
