import React from 'react';

const x = 200;

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

  drawRandomRectangles() {

    const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

    const canvas = this.refs.canvas;
    const c = canvas.getContext("2d");



    for (let i = 0; i < 100; i++) {
      let x = Math.random() * (window.innerWidth * .89);
      let y = Math.random() * (window.innerHeight * .79);
      let colorNum = Math.floor(Math.random() * 8);
      c.fillStyle = colors[colorNum];
      c.fillRect(x, y, 50, 50);
    }
  }

  runAnimation = () => {
    const canvas = this.refs.canvas;
    const c = canvas.getContext("2d");

    let x = 200;
    let dx = 1;

    const animate = () => {
      c.clearRect(0, 0, window.innerWidth, window.innerHeight);
      requestAnimationFrame(animate);
      c.beginPath();
      c.arc(x, 200, 30, 0, Math.PI * 2);
      c.strokeStyle = 'blue';
      c.stroke();
      x += dx;
    }
    animate();
    }


  componentDidMount() {


    // this.drawRandomCircles();
    // this.drawRandomRectangles();
    // Arc / Circle

    this.runAnimation();


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