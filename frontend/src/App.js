import React, { Component } from 'react';
import Login from './components/login/Login.js';
import Register from './components/Register/Register.js';
import Photos from './components/photos/Photos.js';
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
    data: [],
    youtubeCode: ['HCnGKF_Ro2A']
    }
  }

  componentDidMount() {
    fetch(`http://localhost:4000`).then(resp => resp.json()).then((data) => {
      this.setState({data: data})
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
    this.setState({form: form})
  }


  render() {
return (
<div className="App">
<Nav>
<NavItem>
<NavLink href="admin1">
<Button color="primary">Admin</Button>
</NavLink>
</NavItem>
</Nav>
<div className="skewed"></div>
<div>
<h1 id="title">Digital-notice-board</h1>
</div>

<div className='column1'>
<Video youtubeCode={this.state.youtubeCode} endingHandler={() => {this.endingHandler()}} />
</div>

<div className='column2'>
{this.state.data.map((item,value) => <ModulesSideBar key={value} data={item} switchModule={this.slideHandler.bind(this)} /> )}
</div>

<h1>And here come the other components</h1>


</div>
);
}
}

/*
<ForgotPassword />
<Login  />
<Register  />
<AddVideo sendChildInfo={this.sendInfo.bind(this)}/>
<SlideTimeline />
<SnippetSlide image="https://images.pexels.com/photos/60204/pexels-photo-60204.jpeg?h=350&auto=compress&cs=tinysrgb"
profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlZ4wEIMhORQAr9rv15Mj5zZt_t4rw_bmlPLTSdh9ocK9zhF8"/>
*/

export default App;
