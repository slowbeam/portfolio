import React from 'react';

class Canvas extends React.Component {

  drawRandomCircles () {
    const canvas = this.refs.canvas;
    const c = canvas.getContext("2d");

    for (let i = 0; i < 3; i++) {
      let x = Math.random() * (window.innerWidth * .8);
      let y = Math.random() * (window.innerHeight * .7);

      c.beginPath();
      c.arc(x, y, 30, 0, Math.PI * 2);
      c.strokeStyle = 'blue';
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
