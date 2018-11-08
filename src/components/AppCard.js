import React from 'react';

class AppCard extends React.Component {
  render() {
    return (
      <div className="app-card">
        <img alt="temp" src="https://i.pinimg.com/originals/1f/c1/0c/1fc10c3324339cfec98386320ece3756.jpg"/>
        <h2>this is a card for one of my apps</h2>
        <p>here is some info about the app</p>
      </div>
    )
  }
};

export default AppCard;
