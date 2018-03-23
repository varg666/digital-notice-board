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
      youtubeCode: ['qJz18c6gw8c'],
      currentSlide: 0
    }
  }

  componentDidMount() {
    //Read the configuration from /frontend/.env with fallback if not .env file created
    var domain = process.env.REACT_APP_DOMAIN || "http://localhost"
    var port = process.env.REACT_APP_BACKENDPORT || 4000
    fetch(`${domain}:${port}`).then(resp => resp.json()).then((data) => {
      this.setState({data: data, currentSlide: data[0]})
    })
  }

  endingHandler = () => {
    console.log("The video has ended");
  }

  slideHandler(slide) {
    console.log(this.state.currentSlide)
    console.log(slide.props.data);
    this.setState({currentSlide: slide.props.data})
    console.log(this.state.currentSlide)
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
    console.log(this.state.currentSlide)
    if (this.state.currentSlide != 0) {
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
          {content}

        </div>

        <div className='column2'>
          {this.state.data.map((item, value) => <ModulesSideBar current={this.state.currentSlide} key={value} data={item} handleToggleClick={this.slideHandler.bind(this)}/>)}
        </div>

        <h1>And here come the other components</h1>

      </div>
    );
  }
}
export default App;
