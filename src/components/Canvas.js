import React from 'react';

class Canvas extends React.Component {

  drawRandomCircles () {
    const canvas = this.refs.canvas;
    const c = canvas.getContext("2d");

    const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

    for (let i = 0; i < 400; i++) {
      let x = Math.random() * (window.innerWidth * .89);
      let y = Math.random() * (window.innerHeight * .79);
      let colorNum = Math.floor(Math.random() * 8);

      c.beginPath();
      c.arc(x, y, 30, 0, Math.PI * 2);
      c.strokeStyle = colors[colorNum];
      c.stroke();
    }
  }

  componentDidMount() {
    const canvas = this.refs.canvas;
    const c = canvas.getContext("2d");

    this.drawRandomCircles();
    // Arc / Circle
    // c.beginPath();
    // c.arc(300, 300, 30, 0, Math.PI * 2);
    // c.strokeStyle = 'blue';
    // c.stroke();

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
