import React from 'react';

class AudioButton extends React.Component {

  handleClick = () => {
    const audio = new Audio(require('../audio/dp-gl-8bit.mp3'));
    audio.play();
  };

  render() {
    return (
      <div onClick={this.handleClick} className="audio-button">
        <i className="fas fa-play"></i>
      </div>
    )
  }
};

export default AudioButton;
