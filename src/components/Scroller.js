import React from 'react';

class Scroller extends React.Component {
  render() {
    return (
      <div className='scroller'>
        <div className='page one'>
          <div className="inside">
            <h1>sandy edwards</h1>
          </div>
        </div>
        <div className='page two'>
          <div className="inside">
            <h1>is getting</h1>
          </div>
        </div>
        <div className='page three'>
          <div className="inside">
            <h1>kinda good</h1>
          </div>
        </div>
        <div className='page four'>
          <div className="inside">
            <h1>at css</h1>
          </div>
        </div>
      </div>
    )
  }
};

export default Scroller;
