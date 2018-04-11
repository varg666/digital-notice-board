import React from "react";
import ReactPlayer from "react-player";
import "./Video.css";

const Video = props => {
  console.log(props)
  return (
    <div className="slide-body">
    <h2>{props.data.title}</h2>
      <ReactPlayer
        width="100%"
        height="60vh"
        onDuration={duration => props.setVideoDuration(duration)}
        onEnded={props.endingHandler}
        url={`https://www.youtube.com/embed/${props.data.content}`}
        playing
      />
    </div>
  );
};
export default Video;
