import React, { Component } from 'react';
import Login from './components/login/Login.js';
import Register from './components/Register/Register.js';
import logo from './logo.svg';
import './App.css';
import Video from './components/video/Video.js';
import AddVideo from './components/AddVideo/AddVideo';
import ModulesSideBar from './components/modules-side-bar/ModulesSideBar';
import ForgotPassword from "./components/forgot/ForgotPassword.js";
import getIcons from './constants/icons.js'
import SlideTimeline from './components/timeline/SlideTimeline.js';
import SnippetSlide from './components/snippet-slide/SnippetSlide.js';
import moment from 'moment';


class App extends Component {

      constructor(props){
      super(props);
      this.state = {
        data:
        [
    {
        "type": "VIDEO",
        "iconUrl": "https://png.icons8.com/ios/50/000000/play-button-circled-filled.png",
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
        "type": "PHOTOS",
        "iconUrl": "https://png.icons8.com/ios-glyphs/50/000000/picture.png",
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
        "type": "CODE",
        "iconUrl": "https://png.icons8.com/ios/50/000000/code-file-filled.png",
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
        "type": "ANNOUNCEMENT",
        "iconUrl": "https://png.icons8.com/ios-glyphs/50/000000/megaphone.png",
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
        }],
           youtubeCode: ['HCnGKF_Ro2A']

        }
}

endingHandler = () => {
    console.log("The video has ended"); 
    }
    
  slideHandler (e) {
  console.log(e);
    }

sendInfo = (e) => {
    e.preventDefault()
    var form = {}
    for(let i = 0; i < e.target.elements.length; i++) {
      form[e.target.elements[i].id] = e.target.elements[i].value
    }
    console.log(form)
    this.setState({form: form})
  }


  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <Video youtubeCode={this.state.youtubeCode} endingHandler={() => {this.endingHandler()}} />
          {this.state.data.map((item,value) => <ModulesSideBar key={value} data={item} switchModule={this.slideHandler.bind(this)} /> )}
        <ForgotPassword />
        <Login  />
        <Register  />
        <AddVideo sendChildInfo={this.sendInfo.bind(this)}/>
        <SlideTimeline />
        <SnippetSlide image="https://images.pexels.com/photos/60204/pexels-photo-60204.jpeg?h=350&auto=compress&cs=tinysrgb"
                      profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlZ4wEIMhORQAr9rv15Mj5zZt_t4rw_bmlPLTSdh9ocK9zhF8"/>
      </div>
    );
  }
}

export default App;

/*

state = {
    title: null,
    description: null,
    displayDate: null,
    expiryDate: null,
    textarea: null
  };

  sendInfo = (e) => {
    e.preventDefault()
    var form = {}
    for(let i = 0; i < e.target.elements.length; i++) {
      form[e.target.elements[i].id] = e.target.elements[i].value
    }
    console.log(form)
    this.setState({form: form})
  }

  sendingTitle = e => {
    this.setState({
    title: e.target.value
    })
  }

  sendingDesc = e => {
    this.setState({
    description: e.target.value
    })
  }

  sendingDateStart = e => {
    let startDate = e.target.value;
    startDate = moment(startDate).format('L');
    this.setState({
    displayDate: startDate
    })
  }

  sendingDateEnd = e => {
    let endDate = e.target.value;
    endDate = moment(endDate).format('L');
    this.setState({
    expiryDate: endDate
    })
  }
  
  sendingVideo = e => {
    this.setState({
    textarea: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.sendInfo} className="AddVideo">
        <label className="edit-title">Title</label>
        <input id="title" onChange={this.sendingTitle} type="text"/>
        <label className="edit-desc">Description</label>
        <input id="desc" onChange={this.sendingDesc} type="text"/>
        <label className="edit-date">Display Date</label>
        <input id="dates" onChange={this.sendingDateStart} type="date"/>
        <label className="edit-date">Expiry Date</label>
        <input id="datee" onChange={this.sendingDateEnd} type="date"/>
        <label>Youtube Embed Code</label>
        <input id="url" className="video-url" onChange={this.sendingVideo}/>
        <a href="#">Delete this Video</a>
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default AddVideo;

*/