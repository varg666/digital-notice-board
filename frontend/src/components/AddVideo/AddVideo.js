import React from 'react';


class AddVideo extends React.Component {

  render() {
    return (
      <form onSubmit={this.props.sendChildInfo} className="AddVideo">
        <h1>Add Video</h1>
        <input type="hidden" id="type" value="video"/>
        <label>Title</label>
        <input  className="form-control" id="title" type="text"/>
        <label>Description</label>
        <input  className="form-control" id="description" type="text"/>
        <label>Display Date</label>
        <input  className="form-control" id="displayDate" type="date"/>
        <label>Expiry Date</label>
        <input  className="form-control" id="expiryDate" type="date"/>
        <label>Youtube Embed Code</label>
        <input className="form-control"  id="content"/>
        <a href="#">Delete this Video</a>
        <br/>
        <button type="submit"className="btn btn-primary">Add</button>
      </form>
    );
  }
}

export default AddVideo;
