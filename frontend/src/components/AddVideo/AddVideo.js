import React from 'react';

class AddVideo extends React.Component {

  state = {
    Title: null,
    Description: null,
    DisplayDate: null,
    ExpiryDate: null,
    Textarea: null
  }

  sendInfo = e => {
    e.preventDefault();
    console.log(this.state);
  }

  sendingHandler = e => {
    this.setState({
    Title: e.target.value,
    Description: e.target.value,
    DisplayDate: e.target.value,
    ExpiryDate: e.target.value,
    Textarea: e.target.value
    })
    this.sendInfo();
  }

  render() {
    return (
      <form className="AddVideo">
        <label className="edit-title">Title</label>
        <input onChange={this.sendingHandler} type="text"/>
        <label className="edit-desc">Description</label>
        <input onChange={this.sendingHandler} type="text"/>
        <label className="edit-date">Display Date</label>
        <input onChange={this.sendingHandler} type="date"/>
        <label className="edit-date">Expiry Date</label>
        <input onChange={this.sendingHandler} type="date"/>
        <label>Youtube Embed Code</label>
        <textarea onChange={this.sendingHandler} name="" id="video-code" cols="30" rows="10"></textarea>
        <a href="#">Delete this Video</a>
        <button onClick={this.sendInfo} type="submit">Add</button>
      </form>
    );
  }
}

export default AddVideo;