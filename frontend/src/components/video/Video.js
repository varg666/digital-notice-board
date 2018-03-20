import React, { Component } from 'react';

import './Video.css';


class Video extends Component {
  render() {
    return (
      <div className="video">
        <iframe height="100%" src="https://www.youtube.com/embed/ZiuSRQHLv88?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    );
  }
}

export default Video;
