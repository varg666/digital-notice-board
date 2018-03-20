import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Video from './components/video/Video.js';
import AddVideo from './components/video/AddVideo.js';
import ModulesSideBar from './components/modules-side-bar/ModulesSideBar';
import ForgotPassword from "./components/forgot/ForgotPassword.js"

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
      ],
      youtubeCode: ['HCnGKF_Ro2A']
    }
  }

endingHandler = () => {
  console.log("The video has ended");
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Video youtubeCode={this.state.youtubeCode} endingHandler={() => {this.endingHandler()}} />
        <AddVideo />
        <ModulesSideBar />
        <ForgotPassword />
      </div>
    );
  }
}

export default App;
