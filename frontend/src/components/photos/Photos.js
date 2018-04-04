import React, { Component } from 'react';
import './Photos.css';
import '../../../node_modules/animate.css/animate.min.css'
import Slides from "./slides.js"

class Photos extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }

  render() {
    var images = this.props.data.content.split(',');
console.log(images);
    return (
      // The main container
      <div className="photos">
        {/*The big picture*/}
        <img className="animated zoomIn" src={images[0]} alt="" />
        {/*The container with slides under the big picture*/}
        <Slides data={this.props.data}/>
       {/*Progressbar*/}
        <div className="progress animated rotateInUpRight">
          <div className="progressBar"></div>
        </div>
      </div>
    );
  }
}

export default Photos;
