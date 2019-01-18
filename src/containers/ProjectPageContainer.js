import React from "react";
import ProjectPage from "../components/ProjectPage";
import images from "../img/index";
import uuid from "uuid";

class ProjectPageContainer extends React.Component {
  state = {
    projects: [
      {
        name: "vibelist",
        images: [images.vibeListGif2],
        description:
          "Vibelist is a Spotify music discovery tool for creating custom playlists in the mood and genre of the user's choice. Built with React, Redux, React-Router and Thunk on the frontend and a Ruby on Rails backend that interacts seamlessly with the Spotify API.",
        links: {
          Github: "https://github.com/slowbeam/vibe-list-client",
          "Live App": "https://vibelist.herokuapp.com/"
        },
        id: "vibelist"
      },
      {
        name: "Birthify",
        images: [images.birthifyGif1],
        description:
          "Birthify allows users to create and save playlists of songs that came out in their birth year to their Spotify account. Playlists can be listened to in the browser and saved to the user's Spotify account for later use.",
        links: {
          Github: "https://github.com/slowbeam/birthify-client",
          Demo: "https://www.youtube.com/watch?v=OsuEvbesbe4&feature=youtu.be"
        },
        id: "birthify"
      },
      {
        name: "Beat-Machine",
        images: [
          images.beatMachineGif1
        ],
        description:
          "Beat-Machine is an online music making tool inspired by the famous 1980's drum machine the Roland TR-808. Users can create and save complex drum beats, select instrument packs for their beat and adjust the tempo and swing of the beat.",
        links: {
          Github: "https://github.com/slowbeam/beat-machine-app",
          "Live App": "https://beat-machine.com/"
        },
        id: "beat-machine"
      }
    ]
  };

  renderProjectPages = () => {
    const stateDup = Object.assign(this.state, {});

    return stateDup.projects.map(project => (
      <ProjectPage
        key={uuid()}
        name={project.name}
        images={project.images}
        description={project.description}
        id={project.id}
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
