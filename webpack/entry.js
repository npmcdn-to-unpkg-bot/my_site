import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
import Title from './components/Title';
import Blog from './components/Blog';
import Projects from './components/Projects';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="home-container">
        <Header />
        <div className="home-sections">
          <Title />
          <Blog />
          <Projects />
          <Footer />
        </div>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
