import React, {Component} from 'react';
import ModulesSideBar from '../modules-side-bar/ModulesSideBar';
import Search from "./Search";
import AddVideo from '../AddVideo/AddVideo';
import AddCode from '../AddCode/AddCode';
import AddPhoto from '../AddPhoto/AddPhoto';
import AdminNavigation from './AdminNavigation';
import axios from 'axios';
import AddAnnouncement from '../AddAnnouncement/AddAnnouncement';
import AddGithub from '../AddGithub/AddGithub';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentSlide: 0,
      searchData: "",
      showExpired: false,
    }
  }

  componentDidMount() {
    fetch(`http://localhost:4000`)
      .then(resp => resp.json())
      .then((data) => { this.setState({data: data, currentSlide: data[0]})})
  }

  sendInfo = (e, slide) => {
    e.preventDefault()
    const form = {};
    for (let i = 0; i < e.target.elements.length; i++) {
      if (e.target.elements[i].value !== "") {
        form[e.target.elements[i].id] = e.target.elements[i].value
      }
    }
    form["type"] = this.state.currentSlide.type;
    //TODO POST method is sending the object not correctly
    this.setState({form: form})

    if(slide.state.form._id){
      axios.put(`http://localhost:4000/admin/edit/${slide.state.form._id}`, form)
      .then(function (response) {
        console.log("Slide edited successful: ", response);
      })
      .catch(function (error) {
        console.log("Error: ", error);
      })
    } else {

      axios.post('http://localhost:4000/admin/add', form)
      .then(function (response) {
        console.log("Slide added successful: ", response);
      })
      .catch(function (error) {
        console.log("Error: ", error);
      })
    }
  }

  slideHandler(slide) {
    this.setState({currentSlide: slide})
  }

  newSlide(type) {
    this.setState({currentSlide: {
      "type": type,
    }})
  }

  handleSearchInput = (e) => {
    const searchData = e.currentTarget.value;
    this.setState({searchData});
  }

  handleSearchCheckbox = (e) => {
    const expiryCheckbox = e.currentTarget.checked;
    this.setState({showExpired: expiryCheckbox});
  }

  checkSlideExpired = (slide) => {
    const expiryDate = new Date(slide.expiryDate);
    const expiryDateMS = expiryDate.getTime();
    return (Date.now() < expiryDateMS);
  }

  render() {
    let content;
    if(this.state.currentSlide.type){
      if ( this.state.currentSlide.type === "video") {
        content = <AddVideo data={this.state.currentSlide} sendChildInfo={this.sendInfo.bind(this)}/>
      } else if (this.state.currentSlide.type === "announcement") {
        content = <AddAnnouncement data={this.state.currentSlide} sendChildInfo={this.sendInfo.bind(this)}/>
      } else if (this.state.currentSlide.type === "code") {
        content = <AddCode data={this.state.currentSlide} sendChildInfo={this.sendInfo.bind(this)}/>
      } else if (this.state.currentSlide.type === "repo") {
        content = <AddGithub data={this.state.currentSlide} sendChildInfo={this.sendInfo.bind(this)}/>
      } else if (this.state.currentSlide.type === "photos") {
        content = <AddPhoto data={this.state.currentSlide} sendChildInfo={this.sendInfo.bind(this)}/>
      }
    }


    return (
      <div className="section">
        <AdminNavigation newSlide={this.newSlide.bind(this)}/>
        <div className="d-flex">
          <div className="w-50" >
            <ul className="list-group m-3">
              <Search
                handleSearchInput={this.handleSearchInput}
                handleSearchCheckbox={this.handleSearchCheckbox}
                searchData={this.state.searchData}
              />
              {this.state.data
                .filter(slide => slide.title
                  .toLowerCase()
                  .includes(this.state.searchData.toLowerCase()))
                .filter(slide => (this.state.showExpired ? true : this.checkSlideExpired(slide)))
                .map((item, value) => (
                  <li className="list-group-item mb-2">
                    <ModulesSideBar
                      current={this.state.currentSlide}
                      handleToggleClick={() => this.slideHandler(item)}
                      key={value}
                      data={item}/>
                  </li>)
                )}
            </ul>
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
