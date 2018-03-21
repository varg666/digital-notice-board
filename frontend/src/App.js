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
import { Button, Nav, NavItem, NavLink } from 'reactstrap';

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

  componentDidMount() {
    fetch(`http://localhost:4000`).then(resp => resp.json()).then((data) => {
      this.setState({data: data})
      console.log(this.state)
    })

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
    if(e.target.elements[i].value !== "") {
        form[e.target.elements[i].id] = e.target.elements[i].value
      }
    }
    console.log(form)
    this.setState({form: form})
  }


  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <Nav>
          <NavItem>
            <NavLink href="admin1">
              <Button color="primary">Admin</Button>
            </NavLink>
          </NavItem>
        </Nav>

        <h1>This comes from the database</h1>
        {this.state.data.map((item,value) => <ModulesSideBar key={value} data={item} switchModule={this.slideHandler.bind(this)} /> )}
        <h1>And here come the other components</h1>
        <Video youtubeCode={this.state.youtubeCode} endingHandler={() => {this.endingHandler()}} />
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
