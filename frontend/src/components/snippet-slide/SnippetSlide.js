import React from 'react';
import Highlight from 'react-highlight';
import "./SnippetSlide.css"

const SnippetSlide = (props) => {
  return(
  <div className="content">
    <div className="">
      <h3 className="card-title">{props.data.title} </h3>
      <p className="card-text">{props.data.description} </p>
    </div>
    <Highlight className="javascript">
      {props.data.content}
    </Highlight>
  </div>
    );
  }


export default SnippetSlide;
