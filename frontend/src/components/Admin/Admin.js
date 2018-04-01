import React, {Component} from 'react';
import ModulesSideBar from '../modules-side-bar/ModulesSideBar';
import Search from "./Search";
import SlideDetail from "./SlideDetail"
import AddVideo from '../addvideo/AddVideo';
import { Button, Nav, NavItem, NavLink } from 'reactstrap';
import axios from 'axios';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: {
        "type": 'bbb',
        "iconUrl": '',
        "title": '',
        "expiryDate": '',
        "displayDate": '',
        "description": '',
        "content": {
          "src": ''
        }

      },
      data: [],
      currentSlide: 0,
      youtubeCode: ['HCnGKF_Ro2A']

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
  handleClick = (item) => {
    console.log(item.type)
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
              {this.state.data.map((item, value) => <li className="list-group-item mb-2"><ModulesSideBar current={this.state.currentSlide} handleToggleClick={() => this.handleClick(item)} key={value} data={item}/> </li>)}
            </ul>
            <Search/>
          </div>

          <div className="card w-100 m-3">
            <div className="card-body" >
              //TODO here should rendered individual edit views like eg:
              //frontend/src/components/AddVideo/AddVideo.js
              <SlideDetail type={this.state.current.type} description={this.state.current.description} displayDate={this.state.current.displayDate} expiryDate={this.state.current.expiryDate} youtubeCode={this.state.current.youtubeCode}/>
              <AddVideo sendChildInfo={this.sendInfo.bind(this)}/>
            </div>
          </div>

        </div>
  </div>
    )
  }
}

export default Admin;
