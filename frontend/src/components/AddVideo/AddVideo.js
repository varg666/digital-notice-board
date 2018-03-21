import React from 'react';
import moment from 'moment';
import 'moment/locale/de';


class AddVideo extends React.Component {

  state = {
    title: null,
    description: null,
    displayDate: null,
    expiryDate: null,
    textarea: null
  };

  sendInfo = (e) => {
    e.preventDefault();
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
        <input onChange={this.sendingTitle} type="text"/>
        <label className="edit-desc">Description</label>
        <input onChange={this.sendingDesc} type="text"/>
        <label className="edit-date">Display Date</label>
        <input onChange={this.sendingDateStart} type="date"/>
        <label className="edit-date">Expiry Date</label>
        <input onChange={this.sendingDateEnd} type="date"/>
        <label>Youtube Embed Code</label>
        <input className="video-url" onChange={this.sendingVideo}/>
        <a href="#">Delete this Video</a>
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default AddVideo;