import React, { Component } from 'react';
// const header = require('../../src/_pugfiles/header.pug');

class Header extends Component {
  handler(evt) {
    evt.preventDefault();
    console.log(this.state.className);


  }
  render () {
    return (
      <section className="headr">
        <div className="mobile-nav">
          <ul>
            <li><a className="f3 link" href="http://corderophilosophy.com/about">About</a></li>
            <li><a className="f3 link" href="http://corderophilosophy.com/blog">Blog</a></li>
            <li><a className="f3 link" href="#projects">Projects</a></li>
            <li><a className="f3 link" href="#footer">Contact</a></li>
          </ul>
        </div>
        <header>
          <div className="header-position">
            <h1 className="logo">Rich Cordero</h1>
            <nav className="site-nav">
              <ul>
                <li><a className="f3 link" href="http://corderophilosophy.com/about">About</a></li>
                <li><a className="f3 link" href="http://corderophilosophy.com/blog">Blog</a></li>
                <li><a className="f3 link" href="#projects">Projects</a></li>
                <li><a className="f3 link" href="#footer">Contact</a></li>
              </ul>
            </nav><a className="email-link f3 link" href="mailto:rich@corderophilosophy.com">+email me</a>
            <div className="mobile-nav-toggle" onSubmit={this.handler}><span></span></div>
          </div>
        </header>
      </section>
    )
  }
}

export default Header;
