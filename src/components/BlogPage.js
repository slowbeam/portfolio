import React from "react";
import BlogPostCard from "./BlogPostCard";
import uuid from "uuid";

class BlogPage extends React.Component {
  state = {
    user: {},
    posts: []
  };

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }

  fetchPosts = () => {
    const header = {
      "Access-Control-Allow-Origin": "*"
    };

    const data = {
      mode: "cors",
      header: header
    };
    return fetch(
      "https://oh4b8bbri6.execute-api.us-east-1.amazonaws.com/alpha",
      data
    ).then(res => res.json());
  };

  setPosts = response => {
    const { Post } = response.payload.references;
    const posts = Object.values(Post).map(
      ({ id, title, createdAt, virtuals, uniqueSlug }) =>
        Object.assign(
          {},
          {
            title,
            createdAt,
            subtitle: virtuals.subtitle,
            image: virtuals.previewImage.imageId
              ? `https://cdn-images-1.medium.com/max/800/${
                  virtuals.previewImage.imageId
                }`
              : null,
            url: `https://medium.com/@sedwardscode/${uniqueSlug}`
          }
        )
    );
    this.setState({
      posts
    });
  };

  renderPosts = () => {
    const stateDup = Object.assign({}, this.state);

    return stateDup.posts.map(post => (
      <BlogPostCard
        title={post.title}
        image={post.image}
        url={post.url}
        subtitle={post.subtitle}
        date={post.createdAt}
        key={uuid()}
      />
    ));
  };

  render() {
    return (
      <div className="blog-page">
        <div className="blog-header">
          <h3>Blog</h3>
        </div>
        <div id="blog-posts-container">{this.renderPosts()}</div>
      </div>
    );
  }
}

export default BlogPage;
