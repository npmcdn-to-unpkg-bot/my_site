import React, { Component } from 'react';

class Blog extends Component {
  const blog = require('../src/_pugfiles/blog.pug');
  render () {
    return (
      {blog}
    )
  }
}

export default Blog;
