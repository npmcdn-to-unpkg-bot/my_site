import React, { Component } from 'react';
import Post from './Post';
// const blog = require('../../src/_pugfiles/blog.pug');
import Blogposts from '../../src/blog/posts';

class Blog extends Component {
  displayPosts() {
    Blogposts.posts.map((el) => {
      return (
        <Post title="My first Post" posted="05/07/16" url="http://corderophilosophy.com/2016/05/07/my-first-post.html" />

    )});
  }
  render() {
    return (
      <div className="section-blog cf">
        <div className="fl w-100 w-25-ns tc pa3 pb4 left-col">
          <div className="f2 mt4-ns">Recent Blog Posts:</div>
        </div>
        <div className="fl w-100 w-75-ns tc pa3 pb4 right-col pl5">

          <Post title="My first Post" posted="05/07/16" url="http://corderophilosophy.com/2016/05/07/my-first-post.html" />
          <Post title="So what's the Plan?" posted="05/07/16" url="http://corderophilosophy.com/2016/05/07/so-whats-the-plan.html" />
          <Post title="JS - Getting Started" posted="05/21/16" url="http://corderophilosophy.com/2016/05/21/js-getting-started.html" />
        </div>
      </div>
    )
  }
}

export default Blog;
