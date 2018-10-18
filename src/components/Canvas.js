import React from 'react';

class Canvas extends React.component {
  render() {
    return(
      <div>
        <canvas ref="canvas" width={640} height={425} />
        <img ref="image" src="https://i.pinimg.com/originals/e5/61/2a/e5612a5751c7f80799d05c15319af664.jpg" className="hidden" />
      </div>
    )
  }
}
