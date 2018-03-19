import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ModulesSideBar from './components/modules-side-bar/ModulesSideBar';

class App extends Component {

      constructor(props){
      super(props);
      this.state = {
        data:
        [
    {
        "type": "video",
        "title": "The Rabbit and the turle",
        "expiryDate": "01.07.2018",
        "displayDate": "01.07.2018",
        "description": "",
        "content":
        {
            "src": "https://pixabay.com/en/background-image-colorful-art-967820/"
        }
    },
    {
        "type": "image",
        "title": "Startup Trip",
        "description": "Team work video",
        "expiryDate": "01.07.2018",
        "displayDate": "01.07.2018",
        "content":
        {
            "src": ["https://pixabay.com/en/background-image-colorful-art-967820/", "https://pixabay.com/en/background-image-colorful-art-967820/", "https://pixabay.com/en/background-image-colorful-art-967820/", "https://pixabay.com/en/background-image-colorful-art-967820/", "https://pixabay.com/en/background-image-colorful-art-967820/", "https://pixabay.com/en/background-image-colorful-art-967820/"]
        }
    },
    {
        "type": "code",
        "title": "The Rabbit and the turle",
        "description": "Team work video",
        "expiryDate": "01.07.2018",
        "displayDate": "01.07.2018",
        "content":
        {
            "codeImage": "https://pixabay.com/en/background-image-colorful-art-967820/",
            "authorImage": "https://pixabay.com/en/background-image-colorful-art-967820/",
            "authorName": "Aemal Surname"
        }
    },
    {
        "type": "event",
        "title": "19th of March to 22nd march",
        "subtitle": "Devugees Project Week",
        "description": "Team work video",
        "expiryDate": "01.07.2018",
        "displayDate": "01.07.2018",
        "content": {
                "street": "Vulkanstr. 1",
                "postal": "11000",
                "city": "Berlin"
            }
        }]

     }   
}
  

  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          {this.state.data.map((item,value) => <ModulesSideBar key={value} data={item} /> )}
       
      </div>
    );
  }
}

export default App;
