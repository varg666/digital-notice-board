import React from 'react';



class AddVideo extends React.Component {

 

  render() {
    return (
      <form onSubmit={this.props.sendChildInfo} className="AddVideo">
        <h1>Add Video</h1>
        <label>Title</label>
        <input  className="form-control" id="title" type="text"/>
        <label>Description</label>
        <input  className="form-control" id="desc" type="text"/>
        <label>Display Date</label>
        <input  className="form-control" id="datestart" type="date"/>
        <label>Expiry Date</label>
        <input  className="form-control" id="dateend" type="date"/>
        <label>Youtube Embed Code</label>
        <input className="form-control"  id="url"/>
        <a href="#">Delete this Video</a>
        <br/>
        <button type="submit"className="btn btn-primary">Add</button>
      </form>
    );
  }
}

export default AddVideo;
