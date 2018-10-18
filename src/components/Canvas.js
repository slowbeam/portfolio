import React from 'react';

class Canvas extends React.Component {

  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    const img = this.refs.image;

    img.onload = () => {
      ctx.beginPath();
      ctx.arc(100, 100, 100, 0, 2 * Math.PI)
      ctx.stroke();
    }
  }

  render() {
    return(
      <div>
        <canvas ref="canvas" width={640} height={425} />
        <img ref="image" src="https://i.pinimg.com/originals/e5/61/2a/e5612a5751c7f80799d05c15319af664.jpg" className="hidden" />
      </div>
    )
  }
}

export default Canvas;
