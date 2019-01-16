import React from "react";

class BlogPostCard extends React.Component {
  render() {
    return (
      <div className="blog-post">
        <header>
          <h4 className="date">{this.props.date}</h4>
          <div className="blog-element">
            <img className="img-responsive" src={this.props.image} />
          </div>
        </header>
        <div className="blog-content">
          <h4>
            <a href={this.props.url}>{this.props.title}</a>
          </h4>
          <div className="post-meta">
            <span>By Sandy Edwards</span>
          </div>
          <p>{this.props.subtitle}</p>
        </div>
      </div>
    );
  }
}

export default BlogPostCard;
