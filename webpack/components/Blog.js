import React, { Component } from 'react';
import Post from './Post';
// const blog = require('../../src/_pugfiles/blog.pug');

class Blog extends Component {
  render() {
    return (
      <div className="section-blog cf">
        <div className="fl w-100 w-25-ns tc pa3 pb4 left-col">
          <div className="f2 mt4-ns">Recent Blog Posts:</div>
        </div>
        <div className="fl w-100 w-75-ns tc pa3 pb4 right-col pl5">

          <Post title="My first Post" posted="05/07/16" url="" />
          <Post title="So what's the Plan?" posted="05/07/16" url="" />
          <Post title="JS - Getting Started" posted="05/21/16" url="" />
        </div>
      </div>
    )
  }
}

export default Blog;
