import React, { Component } from 'react';
// const title = require('../../src/_pugfiles/title.pug');

class Title extends Component {
  render () {
    return (
      <div className="title-content ba bw2 b--black">
        <div className="tc pv4 pv5-ns">
          <h2 className="dib pa2 ba bw2 b--black br3">corderophilosophy.com</h2><br/>
          <h2 className="dib pa2 ba bw2 b--black f5 near-black ttu tracked br3">Web Development and Philosophy</h2>
        </div>
      </div>    )
  }
}

export default Title;
