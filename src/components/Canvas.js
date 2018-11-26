import React from 'react';

class Canvas extends React.Component {

  fixCanvas() {
    const canvas = document.getElementById('my-canvas');
    const dpi = window.devicePixelRatio;


    let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);

    let style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);

    canvas.setAttribute('height', style_height * dpi);
    canvas.setAttribute('width', style_width * dpi);
  }

  rectangleWaterfall = () => {
    const canvas = this.refs.canvas;
    const c = canvas.getContext("2d");

    function Rectangle(x, y, h, w, dx, dy, color, angle) {
      this.x = x;
      this.y = y;
      this.h = h;
      this.w = w;
      this.dx = dx;
      this.dy = dy;
      this.color = color;
      this.angle = angle;

      this.draw = function() {
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.h, this.w);
      }
      this.updateDown = function() {
        if (this.y < -100) {
          this.x = Math.random() * canvas.width;
          this.dy = -this.dy;
        }
        if (this.y - (this.h * 10) > canvas.height) {
          this.x = Math.random() * canvas.width;
          this.dy = -this.dy;
        }
        this.y += this.dy;
        this.draw();
      }
    }

    const createReactArr = () => {
      const colors = ["#69DDFF", "#96CDFF", "#D8E1FF", "#DBBADD", "#BE92A2"];

      let rectArr = [];

      for (let i = 0; i < 200; i++) {
        let x = Math.random() * (canvas.width);
        let y = Math.random() * (canvas.height);
        let dx = (Math.random() - 0.5) * 5;
        let dy = (Math.random() - 0.5) * 5;
        let h = Math.random() * 50;


        let colorNum = Math.floor(Math.random() * 8);
        rectArr.push(new Rectangle(x, y, .5, h, dx , dy, colors[colorNum]))
      }
      return rectArr;
    }

    const rectangleArray = createReactArr();

    const animate = () => {
      c.clearRect(0, 0, canvas.width, canvas.height);
      requestAnimationFrame(animate);

      for (let i = 0; i < rectangleArray.length; i++) {
        rectangleArray[i].updateDown();
      }
    }
    animate();
  }

  componentDidMount() {

    this.fixCanvas();
    this.rectangleWaterfall();

  }

  render() {
    return(
      <div className="canvas-container">
        <canvas id="my-canvas" ref="canvas" />
      </div>
    )
  }
}

export default Canvas;
