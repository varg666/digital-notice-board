import React, { Component } from 'react';
import logo from './logo.svg';
import Video from './components/video/Video.js';
import './App.css';

class App extends Component {
  state = {
    videoSrc: ['https://www.youtube.com/embed/6UHTyehUZsg']
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Video videoSrc={this.state.videoSrc} />
      
      </div>
    );
  }
}

export default App;
