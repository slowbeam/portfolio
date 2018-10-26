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

    // c.beginPath();
    // c.arc(x, y, radius, 0, Math.PI * 2);
    // c.strokeStyle = 'blue';
    // c.stroke();

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

    let imageArray = [];

    for (let i = 0; i < 100; i++) {
      let width = 30;
      let height = 30;
      let url = "https://banner2.kisspng.com/20180422/thq/kisspng-guy-fieri-food-network-tv-personality-chef-restaur-guy-5add3af0e59aa7.0049169215244479849405.jpg"
      let x = Math.random() * (canvas.width - width * 2) + width;
      let y = Math.random() * (canvas.height - height * 2) + height;
      let dx = (Math.random() - 0.5) * 2;
      let dy = (Math.random() - 0.5) * 2;

      imageArray.push(new Image(x, y, dx, dy, width, height, url))
    }

    const circleArrayOne = createCircleArray("rgba(50, 50, 100, .6)");
    const circleArrayTwo = createCircleArray("rgba(50, 100, 100, .2)");
    const animate = () => {

      c.clearRect(0, 0, canvas.width, canvas.height);
      requestAnimationFrame(animate);

      // for (let i = 0; i < circleArrayOne.length; i++) {
      //   circleArrayOne[i].update();
      // }
      // for (let i = 0; i < circleArrayTwo.length; i++) {
      //   circleArrayTwo[i].update();
      // }
      // for (let i = 0; i < imageArray.length; i++) {
      //   imageArray[i].update();
      // }

    }
    animate();
    }

  drawGuy() {

    const canvas = this.refs.canvas;
    const c = canvas.getContext("2d");

    function Guy(x, y, dx, dy, width, height, url) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.width = width;
      this.height = height;
      this.url = url;

      this.draw = function() {
        let base_image = new Image();
        base_image.src = this.url;
        base_image.onload = function() {
          c.drawImage(base_image, x, y, this.width, this.height)
        }
      }

      this.update = function() {
        if (this.x + this.width / 2 > canvas.width || this.x - this.height / 2 < 0) {
          this.dx = -this.dx;
        }

        if (this.y + this.height / 2 > canvas.height || this.y - this.height / 2 < 0) {
          this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw()
      }
    }



    let width = 30;
    let height = 30;
    let url = "https://banner2.kisspng.com/20180422/thq/kisspng-guy-fieri-food-network-tv-personality-chef-restaur-guy-5add3af0e59aa7.0049169215244479849405.jpg"
    let x = Math.random() * (canvas.width - width * 2) + width;
    let y = Math.random() * (canvas.height - height * 2) + height;
    let dx = (Math.random() - 0.5) * 2;
    let dy = (Math.random() - 0.5) * 2;

    let image = new Guy(30, 50, dx, dy, 50, 80, url);
    image.draw()
  }

  componentDidMount() {

    const canvas = this.refs.canvas;
    const c = canvas.getContext("2d");

    let width = 30;
    let height = 30;
    let url = "https://png.pngtree.com/element_pic/16/06/03/095750dcf5985d0.jpg"

    let base_image = new Image();
    base_image.src = this.url;
    base_image.onload = function() {
    c.drawImage(base_image, 50, 50)
    }
    // this.drawRandomCircles();
    // this.drawRandomRectangles();
    // Arc / Circle

    this.runAnimation();
    this.drawGuy();

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
