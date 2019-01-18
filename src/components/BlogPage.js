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
    return fetch(
      "https://oh4b8bbri6.execute-api.us-east-1.amazonaws.com/alpha"
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

    console.log(stateDup)

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
          I write regular blogs on various software engineering related topics
          on Medium. You'll find interesting stuff like how a MergeSort
          algorithm works, a concise introduction to React Hooks, or even how
          machine learning will revolutionize the music industry!
          <br />
          <br />
          <a
            className="button is-inverted is-outlined"
            href="https://medium.com/@sedwardscode"
          >
            View My Medium
            <span className="icon" style={{ marginLeft: 5 }}>
              <i className="fab fa-lg fa-medium" />
            </span>
          </a>
        </div>
        <div id="blog-posts-container">{this.renderPosts()}</div>
      </div>
    );
  }
}

export default BlogPage;
