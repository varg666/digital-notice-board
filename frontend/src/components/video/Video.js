import React from "react";
import ReactPlayer from "react-player";
import "./Video.css";

const Video = props => {
  return (
    <div className="slide-body">
      <ReactPlayer
        width="100%"
        height="80vh"
        onDuration={duration => props.setVideoDuration(duration)}
        onEnded={props.endingHandler}
        url={`https://www.youtube.com/embed/${props.youtubeCode}`}
        playing
      />
    </div>
  );
};
export default Video;
