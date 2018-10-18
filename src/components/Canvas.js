import React from 'react';

class Canvas extends React.Component {

  componentDidMount() {
    const canvas = this.refs.canvas;
    const c = canvas.getContext("2d");
    const img = this.refs.image;


    c.beginPath();
    c.arc(100, 100, 100, 0, 2 * Math.PI)
    c.stroke();

  }

  render() {
    return(
      <div className="canvas-container">
        <canvas ref="canvas" width={640} height={425} />
      </div>
    )
  }
}

export default Canvas;
