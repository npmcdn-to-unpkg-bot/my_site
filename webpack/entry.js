import React, { Component } from 'react';
import { render } from 'react-dom';
import Blog from './components/Blog';

class App extends Component {
  render() {
    return (
      <Blog />
    )
  }
}

render(<App />, document.getElementById('root'));
