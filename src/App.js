import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Docker's World</h2>
        </div>
        <p className="App-intro">
          Inthe world of CI/CD <code>Dockers</code> make things very easy.
        </p>
      </div>
    );
  }
}

export default App;
