import React from 'react';
import Highlight from 'react-highlight';

const SnippetSlide = (props) => {
  return(
  <div className="card">
    <div className="card-body">
      <h3 className="card-title">{props.data.title} </h3>
      <p className="card-text">{props.data.description} </p>
    </div>
    <Highlight language="javascript">
      {props.data.content}
    </Highlight>
  </div>
    );
  }


export default SnippetSlide;
