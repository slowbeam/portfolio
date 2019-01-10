import React from "react";
import Canvas from "./Canvas";
import Footer from "./Footer";

class Scroller extends React.Component {
  smoothScroll = target => {
    let scrollContainer = target;
    do {
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer) {
        return;
      }
      scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop === 0);

    let targetY = 0;
    do {
      if (target === scrollContainer) break;
      targetY += target.offsetTop;
    } while ((target = target.offsetParent));

    const startScroll = function(c, a, b, i) {
      i++;
      if (i > 30) return;
      c.scrollTop = a + ((b - a) / 30) * i;
      setTimeout(function() {
        startScroll(c, a, b, i);
      }, 20);
    };

    startScroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
  };

  handleMenuClick = targetClass => {
    const page = document.querySelector(targetClass);
    this.smoothScroll(page);
  };

  render() {
    return (
      <div className="scroller">
        <div className="page one">
          <div className="inside one">
            <div className="container">
              <Canvas />
              <div id="overlay-container">
                <div className="overlay">
                  <div className="intro-text-container">
                    <h1>
                      Hi, I'm Sandy Edwards.
                      <br />
                      I'm a full-stack developer.
                    </h1>
                  </div>
                </div>
              </div>
              <div id="projects-button-container">
                <div
                  className="projects-button"
                  onClick={() => this.handleMenuClick(".page.two")}
                >
                  projects
                </div>
              </div>
              <div id="about-button-shadow-container">
                <div className="about-button">about</div>
              </div>
              <div id="blog-button-shadow-container">
                <div className="blog-button">
                  <div
                    id="blog-button-text"
                    onClick={() => this.handleMenuClick("#blog-page")}
                  >
                    blog
                  </div>
                </div>
              </div>
              <div id="contact-button-shadow-container">
                <div className="contact-button">
                  <div
                    id="contact-button-text"
                    onClick={() => this.handleMenuClick("#contact-page")}
                  >
                    contact
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="projects-page" className="page two">
          <div className="inside two">
            <div className="projects-selection-container">
              <div id="projects-top-triangle-right" />
              <div id="projects-top-triangle-left" />
              <div id="projects-title-shadow-container">
                <div id="projects-title">
                  <div id="projects-title-text">
                    <h2>projects</h2>
                  </div>
                </div>
              </div>
              <div className="project-image-container">
                <div className="project-image" id="vibelist-gif">
                  <img
                    className="project-gif"
                    src={require("../img/vibelist-gif-2.gif")}
                  />
                </div>
                <div className="project-image" id="birthify-gif">
                  <img
                    className="project-gif"
                    src={require("../img/bf-2.gif")}
                  />
                </div>
                <div className="project-image" id="beat-machine-gif">
                  <img
                    className="project-gif"
                    src={require("../img/bm-1.gif")}
                  />
                </div>
              </div>
              <div className="project-button-container">
                <div
                  id="vibelist-button"
                  className="project-select-button"
                  onClick={() => this.handleMenuClick("#vibelist")}
                >
                  vibelist
                </div>
                <div
                  id="birthify-button"
                  className="project-select-button"
                  onClick={() => this.handleMenuClick("#birthify")}
                >
                  Birthify
                </div>
                <div
                  id="beat-machine-button"
                  className="project-select-button"
                  onClick={() => this.handleMenuClick("#beat-machine")}
                >
                  Beat-Machine
                </div>
              </div>
            </div>

            <div className="projects-container">
              <div id="vibelist" className="project-container">
                <div className="project-title-container">
                  <div className="project-title-left-polygon" />
                  <div className="project-title-text">vibelist</div>
                  <div className="project-title-right-polygon" />
                </div>
              </div>
              <div id="birthify" className="project-container">
                <div className="project-title-container-two">
                  <div className="project-title-left-polygon" />
                  <div className="project-title-text">birthify</div>
                  <div className="project-title-right-polygon" />
                </div>
              </div>
              <div id="beat-machine" className="project-container">
                <div className="project-title-container-three">
                  <div className="project-title-left-polygon" />
                  <div className="project-title-text">beat-machine</div>
                  <div className="project-title-right-polygon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="blog-page" className="page three">
          <div className="inside three">
            <h2>here are my blog posts</h2>
          </div>
        </div>
        <div id="contact-page" className="page four">
          <div className="inside four">
            <h2>contact me here</h2>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Scroller;
