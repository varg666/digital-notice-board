import React, {Component} from 'react';
import Login from './components/login/Login.js';
import Register from './components/register/Register.js';
import Photos from './components/photos/Photos.js';
import logo from './logo.svg';
import './App.css';
import Video from './components/video/Video.js';
import Github from './components/github/Github.js';
import ModulesSideBar from './components/modules-side-bar/ModulesSideBar';
import ForgotPassword from "./components/forgot/ForgotPassword.js";
import getIcons from './constants/icons.js'
import SlideTimeline from './components/timeline/SlideTimeline.js';
import SnippetSlide from './components/snippet-slide/SnippetSlide.js';
import moment from 'moment';
import {Button, Nav, NavItem, NavLink} from 'reactstrap';
require('dotenv').config()

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      youtubeCode: ['B7bqAsxee4I'],
      currentSlide: 0,
      playing: true
    }
  }
  findItemById() {
    var key = 0;
    for (let i = 0; i < this.state.data.length; i++) {
      if (this.state.data[i]._id == this.state.currentSlide._id) {
        if (this.state.data.length > i) {
          key = ++i;
        }
      }
    }
    return key
  }
  autoSwitchSlide(key) {
    console.log("slide switched automatically to: ", key);
    if (this.state.data.length > key) {
      this.setState({currentSlide: this.state.data[key]})
    } else {
      this.setState({currentSlide: this.state.data[0]})
    }
  }
  componentDidMount() {
    //Read the configuration from /frontend/.env with fallback if not .env file created
    var domain = process.env.REACT_APP_DOMAIN || "http://localhost"
    var port = process.env.REACT_APP_BACKENDPORT || 4000
    fetch(`${domain}:${port}`).then(resp => resp.json()).then((data) => {
      this.setState({data: data, currentSlide: data[0]})
      this.timerID = setInterval(() => {
        if (this.state.currentSlide.type.toLowerCase() !== 'video') {
          if (this.state.playing) {
            var key = this.findItemById(this.state.currentSlide)
            console.log(key);
            this.autoSwitchSlide(key)
          }
        }
      }, 3000);

    })
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  endingHandler = () => {
    var key = this.findItemById(this.state.currentSlide)
    console.log("The video has ended");
    this.autoSwitchSlide(key++)
  }

  slideHandler(slide) {
    this.setState({currentSlide: slide.props.data, playing: false})
    console.log("Stopped the autocycle");
    var timerid = ""
    if (!timerid) {
      clearTimeout(timerid);
    }
    setTimeout(() => {
      this.setState({playing: true})
    console.log("And start again the autocycle");
    }, 3000);
  }

  sendInfo = (e) => {
    e.preventDefault()
    var form = {};
    for (let i = 0; i < e.target.elements.length; i++) {
      if (e.target.elements[i].value !== "") {
        form[e.target.elements[i].id] = e.target.elements[i].value
      }
    }
    this.setState({form: form})
  }
  handleToggleClick(e) {
    console.log(e)
  }
  render() {
    //console.log(this.state.currentSlide)
    var buttons = ""
    if (this.state.playing) {
      buttons = <i className="fa fa-play">playing</i>
    } else {
      buttons = <i className="fa fa-pause">pause</i>

    }
    if (this.state.currentSlide !== undefined && this.state.currentSlide != 0) {
      //console.log(this.state.currentSlide);
      if (this.state.currentSlide.type.toLowerCase() === "video") {
        var content = <Video youtubeCode={this.state.youtubeCode} endingHandler={() => {
          this.endingHandler()
        }}/>
      } else if (this.state.currentSlide.type.toLowerCase() === "photos") {
        var content = <Photos/>
      } else if (this.state.currentSlide.type.toLowerCase() === "repo") {
        var content = <Github data={this.state.currentSlide}/>
      }
    }
    return (
      <div className="App">
        <Nav>
          <NavItem>
            <NavLink href="admin">
              <Button color="primary">Admin</Button>
            </NavLink>
          </NavItem>
        </Nav>
        <div className="skewed"></div>
        <div>
          <h1 id="title">Digital-notice-board</h1>
        </div>

        <div className='column1'>
          {buttons}
          {content}

        </div>

        <div className='column2'>
          {this.state.data.map((item, value) => <ModulesSideBar current={this.state.currentSlide} key={value} data={item} handleToggleClick={this.slideHandler.bind(this)}/>)}
        </div>

      </div>
    );
  }
}
export default App;
