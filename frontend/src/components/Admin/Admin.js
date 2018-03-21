import React, {Component} from 'react';
import ModulesSideBar from '../modules-side-bar/ModulesSideBar';
import Search from "./Search";
import SlideDetail from "./SlideDetail"
import { Button, Nav, NavItem, NavLink } from 'reactstrap';

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
      youtubeCode: ['HCnGKF_Ro2A']

    }
  }

  componentDidMount() {
    fetch(`http://localhost:4000`).then(resp => resp.json()).then((data) => {
      this.setState({data: data})
      console.log(this.state)
    })

  }
  handleClick = (item) => {
    console.log(item.content)
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
              {this.state.data.map((item, value) => <li className="list-group-item mb-2"><ModulesSideBar  onclick={() => this.handleClick(item)} key={value} data={item}/> </li>)}
            </ul>
            <Search/>
          </div>

          <div className="card w-100 m-3">
            <div className="card-body" >
              //TODO here should rendered individual edit views like eg:
              //frontend/src/components/AddVideo/AddVideo.js
              <SlideDetail type={this.state.current.type} description={this.state.current.description} displayDate={this.state.current.displayDate} expiryDate={this.state.current.expiryDate} youtubeCode={this.state.current.youtubeCode}/>
            </div>
          </div>

        </div>
  </div>
    )
  }
}

export default Admin;
