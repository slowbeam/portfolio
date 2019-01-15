import React from "react";
import Canvas from "./Canvas";
import Footer from "./Footer";
import ProjectPageContainer from "../containers/ProjectPageContainer";
import Menu from "./Menu";
import ProjectSelectPage from "./ProjectSelectPage";

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
              <Menu handleMenuClick={this.handleMenuClick} />
            </div>
          </div>
        </div>

        <div id="projects-page" className="page two">
          <div className="inside two">
            <ProjectSelectPage handleMenuClick={this.handleMenuClick} />
            <ProjectPageContainer />
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
