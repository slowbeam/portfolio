import React from 'react';
import AppCard from '../components/AppCard'

class AppCardContainer extends React.Component {

  render() {
    return (
      <div className="app-card-container">
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
      </div>
    )
  }
};

export default AppCardContainer;
