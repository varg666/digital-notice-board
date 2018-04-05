import React, {Component} from 'react';
import ModulesSideBar from '../modules-side-bar/ModulesSideBar';
import Search from "./Search";
import SlideDetail from "./SlideDetail"
import AddVideo from '../AddVideo/AddVideo';
import AddCode from '../AddCode/AddCode';
import { Button, Nav, NavItem, NavLink } from 'reactstrap';
import axios from 'axios';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentSlide: 0

    }
  }

  componentDidMount() {
    fetch(`http://localhost:4000`).then(resp => resp.json()).then((data) => {
      this.setState({data: data, currentSlide: data[0]})
    })

  }
  sendInfo = (e) => {
    e.preventDefault()
    const form = {};
    for (let i = 0; i < e.target.elements.length; i++) {
      if (e.target.elements[i].value !== "") {
        form[e.target.elements[i].id] = e.target.elements[i].value
      }
    }
    form["type"] = 'video';
    console.log('this a fetach', form)
    //TODO POST method is sending the object not correctly
    this.setState({form: form})
     axios.post('http://localhost:4000/admin/add', form)
      .then(function (response) {
        console.log("Video added successful: ", response);
      })
      .catch(function (error) {
        console.log("Error: ", error);
      });
  }
  slideHandler(slide) {
    this.setState({currentSlide: slide})
    }
  handleClick = (item) => {
    this.setState({
      current: {
        "type": item.type,
        "iconUrl": item.iconUrl,
        "title": item.title,
        "expiryDate": item.expiryDate,
        "displayDate": item.displayDate,
        "description": item.description,
        "content": {
          //TODO Why is that need? make this hotfix better
          "src": item.content ? item.content.src : ""
        }
      }
    })
  }

  render() {
  if(this.state.currentSlide.type){
      if ( this.state.currentSlide.type.toLowerCase() === "video") {
        var content = <AddVideo data={this.state.currentSlide} sendChildInfo={this.sendInfo.bind(this)}/>
      } else if (this.state.currentSlide.type.toLowerCase() === "code") {
        var content = <AddCode data={this.state.currentSlide} sendChildInfo={this.sendInfo.bind(this)}/>
      }
      }
    return (
  <div className="section">
    <Nav>
      <NavItem>
        <NavLink href="/">
          <Button color="primary">Frontend</Button>
        </NavLink>
      </NavItem>
    </Nav>
    <div className="d-flex">
      <div className="w-50" >
        <ul className="list-group m-3">
          {this.state.data.map((item, value) => <li className="list-group-item mb-2"><ModulesSideBar key={value} data={item} current={this.state.currentSlide} handleToggleClick={() => this.slideHandler(item)} /> </li>)}
        </ul>
        <Search/>
      </div>

      <div className="card w-100 m-3">
        <div className="card-body" >
          {content}
        </div>
      </div>

    </div>
  </div>
    )
  }
}

export default Admin;
