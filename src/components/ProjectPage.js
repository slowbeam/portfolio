import React from "react";
import uuid from "uuid";

class ProjectPage extends React.Component {
  handleImageClick = () => {
    const firstLinkKey = Object.keys(this.props.links)[1];
    const targetLink = this.props.links[firstLinkKey];
    const newWindow = window.open(targetLink, "_blank");
    newWindow.focus();
  };

  renderProjectImages = () => {
    const imagesDup = [...this.props.images];

    return imagesDup.map(image => (
      <img
        className="project-page-image"
        src={image}
        alt="demo of project"
        onClick={this.handleImageClick}
        key={uuid()}
      />
    ));
  };
  render() {
    return (
      <div id={this.props.id} className="project-container">
        <div className="project-title-container">
          <div className="project-title-text">
            <h3>{this.props.name}</h3>
          </div>
        </div>
        <div className="project-content">
          <div className="project-page-description">
            <div className="project-page-description-paragraph">
              {this.props.description}
            </div>
            <div className="project-links-container">
              <a
                href={this.props.links[Object.keys(this.props.links)[0]]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {Object.keys(this.props.links)[0]}
              </a>
              &nbsp; | &nbsp;
              <a
                href={this.props.links[Object.keys(this.props.links)[1]]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {Object.keys(this.props.links)[1]}
              </a>
            </div>
          </div>
          <div className="project-page-image-container">
            {this.renderProjectImages()}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectPage;
