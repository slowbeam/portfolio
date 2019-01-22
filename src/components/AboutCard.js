import React from "react";

class AboutCard extends React.Component {
  render() {
    return (
      <div className="about-card">
        <div className="about-image-container">
          <img
            className="about-image"
            src={require("../img/sandy-edwards.png")}
            alt="sandy edwards"
          />
        </div>

        <div className="about-description">
          <p>
            I'm an artist, musician and software engineer and I love combining
            my three passions to create amazing products.
          </p>
          <p>
            I'm highly skilled in JavaScript, React, Redux, Thunk, HTML5, CSS3,
            SASS, Ruby, Ruby on Rails, Rspec, SQL and PostgreSQL.
          </p>
          <p>
            I attended the full-stack software engineering immersive at the
            Flatiron School in NYC, and I'm currently searching for the perfect
            fit in a role to start my career. However, my french bulldog
            Jellybean would prefer it if I was a stay-at-home dad forever.
          </p>
        </div>
      </div>
    );
  }
}

export default AboutCard;
