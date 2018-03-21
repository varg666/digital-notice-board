import React from 'react';



class AddVideo extends React.Component {

 

  render() {
    return (
      <form onSubmit={this.props.sendChildInfo} className="AddVideo">
        <label className="edit-title">Title</label>
        <input id="title"  type="text"/>
        <label className="edit-desc">Description</label>
        <input id="desc" type="text"/>
        <label className="edit-date">Display Date</label>
        <input id="datestart" type="date"/>
        <label className="edit-date">Expiry Date</label>
        <input id="dateend" type="date"/>
        <label>Youtube Embed Code</label>
        <input id="url" className="video-url" />
        <a href="#">Delete this Video</a>
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default AddVideo;