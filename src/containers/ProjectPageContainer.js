import React from "react";
import ProjectPage from "../components/ProjectPage";

class ProjectPageContainer extends React.Component {
  state = {
    projects: [
      {
        name: "vibelist",
        images: [
          "../img/vibelist-gif-2.gif",
          "../img/vibelist-gif-3.gif",
          "../img/vibelist-gif-4.gif"
        ],
        description: "Vibelist",
        links: {
          Github: "https://github.com/slowbeam/vibe-list-client",
          "Live App": "https://vibelist.herokuapp.com/"
        }
      },
      {
        name: "Birthify",
        images: ["../img/bf-2.gif"],
        description: "Birthify",
        links: {
          Github: "https://github.com/slowbeam/birthify-client",
          Demo: "https://www.youtube.com/watch?v=OsuEvbesbe4&feature=youtu.be"
        }
      },
      {
        name: "Beat-Machine",
        images: ["../img/bm-1.gif", "../img/bm-2.gif", "../img/bm-3.gif"],
        description: "Beat-Machine",
        links: {
          Github: "https://github.com/slowbeam/beat-machine-app",
          "Live App": "https://beat-machine.com/"
        }
      }
    ]
  };

  renderProjectPages = () => {
    const stateDup = Object.assign(this.state, {});

    return stateDup.projects.map(project => (
      <ProjectPage
        name={project.name}
        images={project.images}
        description={project.description}
        links={project.links}
      />
    ));
  };

  render() {
    return (
      <div className="projects-container">{this.renderProjectPages()}</div>
    );
  }
}

export default ProjectPageContainer;
