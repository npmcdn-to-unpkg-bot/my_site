import React, { Component } from 'react';
// const blog = require('../../src/_pugfiles/blog.pug');


class Post extends Component {
  render() {
    return (
      <a href={this.props.url}>
        <div className="fl w-5 w-2-ns mh2-ns">
          <div className="mw5 center bg-white br3 pa1 pa2-ns mv3 ba b--black-10 post-thumb">
            <div className="tc post-meta">
              <h1 className="f4 post-meta-title black">{this.props.title}</h1>
              <hr className="bb bw1 b--black-10 mb1"/>
              <p className="lh-solid measure center f6 black-70 mb2 post-meta-excerpt">{this.props.date}</p>
            </div>
          </div>
        </div>
      </a>
    )
  }
}

export default Post;
