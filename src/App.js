import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import Output from './Output/Output';
import marked from 'marked';
import Radium from 'radium';

marked.setOptions({
  breaks: true,
  gfm: true,
});

const placeholder = `
# Welcome to Markdown Previewer!
## This is a really nice sub-header, isn't it?

Here's a link: [link](https://www.freecodecamp.com), 

We also have some \`inline code\` over here, 

and

\`\`\`
Also a code block
which is longer
and takes up several lines
\`\`\`

You can also write a pretty neat list: 

+ and put a list item here,
+ and another, 

You can quote text, like this:

> quoted text goes here, 

> another quote, 

You can add an image of a kitten (or something else):

![a kitten](http://res.freestockphotos.biz/pictures/10/10121-a-kitten-isolated-on-a-white-background-pv.jpg "an image")
 
and you can write **bolded text** and _italics_ too!

### Have fun previewing markdown!
`;


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      output: placeholder,
      showCredits: false
    }
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler (event) {
    this.setState({
      output: event.target.value
    })
  }

  toggleCreditsWidget = () => {
    const doesShow = this.state.showCredits;
    this.setState({showCredits : !doesShow});
  }
  
  render() {
    return (
      <div className="App">
      <h1 id="title">Markdown Previewer</h1>
      <h3 id="credits">Created by <a href="http://www.virginiabalseiro.com" target="_blank"> Virginia Balseiro </a></h3>
      <h4 id="cheatsheet-link"><a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank">Markdown Cheatsheet</a></h4>
      <UserInput 
        changed={this.changeHandler}
        placeholder={this.state.output}/>
      <Output 
        output={this.state.output}/>
      </div>
    );
  }
}

export default Radium(App);
