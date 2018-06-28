import React from 'react';


const userinput = (props) => {
    return (
      <div>
        <textarea id="editor"
            type= 'text'
            value={props.placeholder}
            onChange={props.changed}
            cols="80"
            rows="20"
            placeholder={props.output}/>
            
      </div>
    )
  }

  export default userinput;