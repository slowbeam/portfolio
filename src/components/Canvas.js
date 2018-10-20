import React from 'react';

class Canvas extends React.Component {

  drawCircles () {

  }

  componentDidMount() {
    const canvas = this.refs.canvas;
    const c = canvas.getContext("2d");

    c.fillStyle = "rgba(255, 0 , 0, 0.5)";
    c.fillRect(100, 100, 100, 100);
    c.fillStyle = "rgba(0, 0 , 255, 0.5)";
    c.fillRect(400, 100, 100, 100);
    c.fillStyle = "rgba(0, 255, 0, 0.5)";
    c.fillRect(300, 300, 100, 100);
    c.fillStyle = "#000";
    c.fillRect(400, 200, 200, 200);

    c.beginPath();
    c.moveTo(50, 300);
    c.lineTo(300, 100);
    c.lineTo(400, 300);
    c.lineTo(550, 50);
    c.strokeStyle = "#f34a35";
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
