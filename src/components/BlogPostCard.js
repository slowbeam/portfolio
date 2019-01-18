import React from "react";

class BlogPostCard extends React.Component {

  renderMonth = () => {
    const monthArr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let date = new Date(this.props.date);
    return monthArr[date.getMonth()];
  }

  renderDay = () => {
    let date = new Date(this.props.date);
    return date.getDate();
  }

  render() {
    return (
      <div className="blog-post">
        <header>
          <h4 className="date">
            {this.renderDay()}
            <br />
            {this.renderMonth()}
          </h4>
          <div className="blog-element">
            <img
              className="img-responsive"
              src={this.props.image}
              alt="blog cover"
            />
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
