import React, { Component } from 'react';
import './App.css';
import CenteredGrid from './GridContainer'

class App extends Component {
  render() {
    return (
      <div>
        <h1>THIS IS OUR LANDING PAGE</h1>
        <div><CenteredGrid/></div>
      </div>
    );
  }
}

export default App;
