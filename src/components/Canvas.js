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

    function Circle(x, y, dx, dy, radius, color) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;

      this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // c.strokeStyle = 'white';
        // c.stroke();
        c.fillStyle = color;
        c.fill();
      }

      this.update = function() {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.dx = -this.dx;
        }

        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw()
      }
    }

    const createCircleArray = (color) => {

      let circleArray = [];

      for (let i = 0; i < 100; i++) {
        let radius = 30;
        let x = Math.random() * (canvas.width - radius * 2) + radius;
        let y = Math.random() * (canvas.height - radius * 2) + radius;
        let dx = (Math.random() - 0.5) * 2;
        let dy = (Math.random() - 0.5) * 2;

        circleArray.push(new Circle(x, y, dx, dy, radius, color))
      }
      return circleArray;
    }

    const circleArrayOne = createCircleArray("rgba(50, 50, 100, .6)");
    const circleArrayTwo = createCircleArray("rgba(50, 100, 100, .2)");
    const animate = () => {

      c.clearRect(0, 0, canvas.width, canvas.height);
      requestAnimationFrame(animate);

      for (let i = 0; i < circleArrayOne.length; i++) {
        circleArrayOne[i].update();
      }
      // for (let i = 0; i < circleArrayTwo.length; i++) {
      //   circleArrayTwo[i].update();
      // }

    }
    animate();
    }

  drawGuy() {

    const canvas = this.refs.canvas;
    const c = canvas.getContext("2d");

    function Guy(x, y, dx, dy, width, height) {

      let base_image = new Image();
      base_image.src = "https://66.media.tumblr.com/14fa0853be1a5ebc1b18317f7dac0582/tumblr_inline_npzmkfsewf1rwmtav_250.png";


      this.draw = function() {

        base_image.onload = function() {
              c.drawImage(base_image, x, y, height, width);
        }

      }.bind(this)

      this.update = function() {
        let interval = setInterval(function() {

          return function() {
            // c.clearRect(0, 0, c.canvas.width, c.canvas.height);
            c.drawImage(base_image, x, y, height, width)
            if ((x + width) > c.canvas.width || x < 0) {
              dx = -dx;
            }
            if ((y + height) > c.canvas.height || y < 0){
              dy = -dy;
            }
            x += dx;
            y += dy;
          }
        }().bind(this), 1000)
      }.bind(this)
    }



    const createImageArray = () => {

      let imageArray = [];

      for (let i = 0; i < 100; i++) {

      let width = 50;
      let height = 50;

      let x = Math.random() * (canvas.width - width * 2) + width;
      let y = Math.random() * (canvas.height - height * 2) + height;
      let dx = (Math.random() - 0.5);
      let dy = (Math.random() - 0.5);

      imageArray.push(new Guy(x, y, dx, dy, height, width))
      }

      return imageArray;

    }



    // const guy = new Guy(200, 30, 1, 1, 50, 50);
    // guy.draw();
    const guyArrayOne = createImageArray();

    const animate = () => {

      // c.clearRect(0, 0, canvas.width, canvas.height);
      requestAnimationFrame(animate);

      for (let i = 0; i < guyArrayOne.length; i++) {
        if(guyArrayOne[i]) {
          guyArrayOne[i].draw();
        }
      }

    }

    animate();


  }

  componentDidMount() {


    this.drawGuy();


    // this.drawRandomCircles();
    // this.drawRandomRectangles();

    // this.runAnimation();
    // this.drawGuy();

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
