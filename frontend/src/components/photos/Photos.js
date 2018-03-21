import React, { Component } from 'react';
import './Photos.css';
import '../../../node_modules/animate.css/animate.min.css'
import Slides from "./slides.js"

class Photos extends Component {
    constructor (props) {
    super (props);
    
}

  render() {
    return (
      // The main container
      <div className="photos">
        {/*The big picture*/}
        <img className="animated zoomIn" src="http://via.placeholder.com/857x480" />
        {/*The container with slides under the big picture*/}
        <Slides />
       {/*Progressbar*/}
        <div className="progress animated rotateInUpRight">
          <div className="progressBar"></div>
        </div>
      </div>
    );
  }
}


export default Photos;