import React, {Component} from 'react';
import './Photos.css';
import '../../../node_modules/animate.css/animate.min.css'
import Slides from "./slides.js"

class Photos extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var images = this.props.data.content.split(',');
    return (
    <div className="splinter">
      <img className="w-100 animated zoomIn active" src={images[0]} alt=""/>
      <Slides data={this.props.data}/>
    </div>);
  }
}

export default Photos;
