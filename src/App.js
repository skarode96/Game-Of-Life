import React, { Component } from 'react';
import './App.css';
import brogrammer from './brogrammer-logo.png';

class App extends Component {
  
  render() {
    const name = "<Bro/>grammers...";
    return (
      <div className="App">
        <header className="App-header">
          <img src={brogrammer} className="App-logo"  alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
          <br/>
          <br/>
          <br/>
          <p>{name}</p>
        </header>
      </div>
    );
  }
}

export default App;
