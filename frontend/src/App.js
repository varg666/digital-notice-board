import React, { Component } from "react";
import Photos from "./components/photos/Photos.js";
import "./App.css";
import Video from "./components/video/Video.js";
import Github from "./components/github/Github.js";
import ModulesSideBar from "./components/modules-side-bar/ModulesSideBar";
import SlideTimeline from "./components/timeline/SlideTimeline.js";
import SnippetSlide from "./components/snippet-slide/SnippetSlide.js";
import { Button, Nav, NavItem, NavLink } from "reactstrap";
import { PROGRESS_BAR_SPEED } from "./constants/misc.js";
import Announcement from "./components/Announcement/Announcement";

require("dotenv").config();

class App extends Component {
  state = {
    data: [],
    youtubeCode: ["h9bk0m2TDaA"],
    currentSlide: 0,
    playing: true,
    duration: PROGRESS_BAR_SPEED,
  };

  componentDidMount() {
    //Read the configuration from /frontend/.env with fallback if not .env file created
    const domain = process.env.REACT_APP_DOMAIN || "http://localhost";
    const port = process.env.REACT_APP_BACKENDPORT || 4000;
    fetch(`${domain}:${port}`)
      .then(resp => resp.json())
      .then(data => {
        //get all data from the backend and sets the first slide active
        this.setState({ data: data, currentSlide: data[0] });
        //sets a interval which holds all slides for XXXX milleseconds
        this.nextSlideInterval();
      });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  nextSlideInterval = () => {
    clearInterval(this.timerID);
    // when slide is video, wait for videoEndinghandler instead
    if (this.state.currentSlide.type === "video") return;
    this.timerID = setInterval(() => {
      if (this.state.playing) {
        const key = this.findItemById(this.state.currentSlide);
        this.autoSwitchSlide(key);
      }
    }, this.state.duration * 1000);
  };

  setVideoDuration = duration => {
    this.setState({ duration });
  };

  findItemById() {
    return this.state.data.findIndex(item => item._id === this.state.currentSlide._id);
  }

  autoSwitchSlide(key) {
    this.setState({ duration: PROGRESS_BAR_SPEED });
    // for the last slide set index back to zero
    const slideIndex = this.state.data.length - 1 > key ? (key += 1) : 0;
    this.setState({ currentSlide: this.state.data[slideIndex] });
    this.nextSlideInterval();
  }

  videoEndingHandler = () => {
    let key = this.findItemById(this.state.currentSlide);
    this.autoSwitchSlide(key);
  };

  slideHandler(slide) {
    this.setState({ currentSlide: slide.props.data, playing: true });
    this.nextSlideInterval();
    // setTimeout(() => {
    //   this.setState({ playing: true });
    // }, PROGRESS_BAR_SPEED * 1000);
  }

  sendInfo = e => {
    e.preventDefault();
    const form = {};
    for (let i = 0; i < e.target.elements.length; i++) {
      if (e.target.elements[i].value !== "") {
        form[e.target.elements[i].id] = e.target.elements[i].value;
      }
    }
    this.setState({ form: form });
  };

  render() {
    let content;
    if (this.state.currentSlide) {
      const slideType = this.state.currentSlide.type.toLowerCase();
      if (slideType === "video") {
        content = (
          <Video
            youtubeCode={this.state.youtubeCode}
            endingHandler={this.videoEndingHandler}
            setVideoDuration={this.setVideoDuration}
          />
        );
      } else if (slideType === "photos") {
        content = <Photos data={this.state.currentSlide} />;
      } else if (slideType === "repo") {
        content = <Github data={this.state.currentSlide} />;
      } else if (slideType === "code") {
        content = <SnippetSlide data={this.state.currentSlide} />;
      } else if (slideType === "announcement") {
        content = <Announcement data={this.state.currentSlide} />;
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
        <div className="skewed" />
        <div>
          <h1 id="title">DCI Digital Notice Board</h1>
        </div>

        <div className="column1">
          {this.state.playing ? (
            <i className="fa fa-play">playing</i>
          ) : (
            <i className="fa fa-pause">pause</i>
          )}
          {content}
          <SlideTimeline time={this.state.duration} />
        </div>

        <div className="column2">
          {this.state.data.map((item, value) => (
            <ModulesSideBar
              current={this.state.currentSlide}
              key={value}
              data={item}
              handleToggleClick={this.slideHandler.bind(this)}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
