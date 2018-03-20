import React, { Component } from 'react';
import './Photos.css';
import '../../../node_modules/animate.css/animate.min.css'

class Photos extends Component {
  render() {
    return (
      <div className="photos">
        <img className="animated zoomIn" src="http://via.placeholder.com/857x480" />
        <div className="thumbnails">
          <img className="animated slideInRight" src="http://via.placeholder.com/115x70" />
          <img className="animated slideInDown" src="http://via.placeholder.com/115x70" />
          <img className="animated jackInTheBox" src="http://via.placeholder.com/115x70" />
          <img className="animated slideInUp" src="http://via.placeholder.com/115x70" />
          <img className="animated slideInLeft" src="http://via.placeholder.com/115x70" />
        </div>
        <div className="progress animated rotateInUpRight">
          <div className="progressBar">0%</div>
        </div>
      </div>
    );
  }
}
export default Photos;