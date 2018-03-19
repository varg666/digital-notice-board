import React from 'react';

const Video = (props) => {

  return (
    <iframe title={props.videoSrc} width="560" height="315" src={props.videoSrc} frameBorder="0" allowFullScreen></iframe>
    
  );
};
export default Video