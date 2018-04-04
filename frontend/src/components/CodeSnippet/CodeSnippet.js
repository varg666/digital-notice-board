import React, { Component } from 'react';
import highlight from 'highlight.js';

const CodeSnippet = (props) => {
console.log(props);
    return (
      <div	className='slide-body'>
          <pre>
      <code class="javascript">{props.data.content}</code>
      </pre>
      <script src=""></script>
      </div>
   
    );
  };
 

export default CodeSnippet;