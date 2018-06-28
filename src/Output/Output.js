import React from 'react';
import marked from 'marked';

const renderer = new marked.Renderer();

  renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}` + '</a>';
  }

const output = (props) => {
   
    return (
      <div id="output-container">
      <div id="preview" 
         dangerouslySetInnerHTML = {{__html: marked(props.output, { renderer : renderer})}}>
      </div>
      </div>
    )
  }

  export default output;