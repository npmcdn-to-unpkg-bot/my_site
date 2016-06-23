import React, { Component } from 'react';
// const projects = require('../../src/_pugfiles/projects.pug');

class Projects extends Component {
  render () {
    return (
      <div className="section-projects" id="projects">
        <div className="cf">
          <div className="fl w-100 w-50-ns tc pa3 pb4 proj-left-col">
            <ul className="list pl0 ml0 center mw5 ba b--near-black br3 mt5-ns bw2">
              <li className="ph3 pv2 bb b--near-black bw2 bg-white"><a className="link b black" href="https://www.github.com/corderophilosophy" target="_blank">Github</a></li>
              <li className="ph3 pv2 bb b--near-black bw2 bg-white"><a className="link b black" href="https://www.codepen.io/corderophilosophy" target="_blank">Codepen</a></li>
              <li className="ph3 pv2 bg-white"><a className="link b black" href="https://www.freecodecamp.com/corderophilosophy" target="_blank">freeCodeCamp</a></li>
            </ul>
          </div>
          <div className="fl w-100 w-50-ns tc pa3 pb4 proj-right-col">
            <div className="mw5 mw7-ns center pa3 ph5-ns mt4-ns">
              <div className="f2 white">See some of my work</div>
            </div>
          </div>
        </div>
      </div>    )
  }
}

export default Projects;
