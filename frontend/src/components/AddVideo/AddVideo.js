import React from 'react';


class AddVideo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      form: {}
    }
  }
  onChange(field, value) {
    console.log(this.state.form);
    let data = { ...this.state.form };
    data[field] = value
    this.setState({ form: data })

  }
  render() {
    return (
      <form onSubmit={this.props.sendChildInfo} className="AddVideo">
        <h1>Add Video</h1>
        <label>Title</label>
        <input onChange={(e) => this.onChange(e.target.id, e.target.value)}  className="form-control" id="title" type="text"/>
        <label>Description</label>
        <input onChange={(e) => this.onChange(e.target.id, e.target.value)}  className="form-control" id="description" type="text"/>
        <label>Display Date</label>
        <input onChange={(e) => this.onChange(e.target.id, e.target.value)}  className="form-control" id="displayDate" type="date"/>
        <label>Expiry Date</label>
        <input onChange={(e) => this.onChange(e.target.id, e.target.value)}  className="form-control" id="expiryDate" type="date"/>
        <label>Youtube Link</label>
        <input onChange={(e) => this.onChange(e.target.id, e.target.value)} className="form-control"  id="content"/>
        <a href="#">Delete this Video</a>
        <br/>
        <button type="submit"className="btn btn-primary">Add</button>
      </form>
    );
  }
}

export default AddVideo;
