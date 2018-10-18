import React from 'react';

class Canvas extends React.Component {

  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    const img = this.refs.image;

    img.onload = () => {
      ctx.beginPath();
      ctx.fill
      ctx.arc(100, 100, 100, 0, 2 * Math.PI)
      ctx.stroke();
    }
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
