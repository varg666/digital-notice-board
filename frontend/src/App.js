import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ModulesSideBar from './components/modules-side-bar/ModulesSideBar';

class App extends Component {
   constructor(props){
      super(props);
      this.state = {
        data:
      [
        {
          "id":0,
          "name":"javaScript:The Definitive Guide, 6t Edition",
          "release":"September 2010",
          "amount":1,
          "price":"2.99",
          "liked" :false
        },
        {
          "id":1,
          "name":"Ruby on Rails: Up and Running",
          "release":"March 2007",
          "amount":1,
          "price":"3.99",
          "liked" :false  
        },
        {
          "id":2,
          "name":"Ruby on Rails: Up and Running",
          "release":"March 2007",
          "amount":1,
          "price":"340.99",
          "liked" :false  
        },
        {
          "id":3,
          "name":"Ruby on Rails: Up and Running",
          "release":"March 2007",
          "amount":1,
          "price":"50.99",
          "liked" :false  
        }
      ]
    }
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
        <ModulesSideBar />
      </div>
    );
  }
}

export default App;
