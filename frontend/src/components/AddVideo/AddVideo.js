import React from 'react';
import moment from 'moment';


class AddVideo extends React.Component {

 sendInfo = (e) => {
    e.preventDefault()
    var form = {}
    for(let i = 0; i < e.target.elements.length; i++) {
      form[e.target.elements[i].id] = e.target.elements[i].value
    }
    console.log(form)
    this.setState({form: form})
  }

  render() {
    return (
      <form onSubmit={this.sendInfo} className="AddVideo">
        <label className="edit-title">Title</label>
        <input id="title" onChange={this.sendingTitle} type="text"/>
        <label className="edit-desc">Description</label>
        <input id="desc" onChange={this.sendingDesc} type="text"/>
        <label className="edit-date">Display Date</label>
        <input id="dates" onChange={this.sendingDateStart} type="date"/>
        <label className="edit-date">Expiry Date</label>
        <input id="datee" onChange={this.sendingDateEnd} type="date"/>
        <label>Youtube Embed Code</label>
        <input id="url" className="video-url" onChange={this.sendingVideo}/>
        <a href="#">Delete this Video</a>
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default AddVideo;