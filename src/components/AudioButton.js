import React from 'react';

class AudioButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = { play: false };
    this.url = require('../audio/dp-gl-8bit.mp3');
    this.audio = new Audio(this.url);
    this.togglePlay = this.togglePlay.bind(this);
  }

  togglePlay = () => {
   this.setState({ play: !this.state.play }, () => {
     this.state.play ? this.audio.play() : this.audio.pause();
   });
 }

  render() {
    return (
      <div onClick={this.togglePlay} className="audio-button">
        {this.state.play ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>}
      </div>
    )
  }
};

export default AudioButton;
