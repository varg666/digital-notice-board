import React from 'react';
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';

class AddCode extends React.Component {
  constructor(props) {
    super(props);
    var props = this.props.data
    props.displayDate = props.displayDate ? props.displayDate.slice(0, -14) : props.displayDate
    props.expiryDate = props.expiryDate ? props.expiryDate.slice(0, -14) : props.expiryDate
    this.state = {
      form: this.props.data,
      fields: {},
      errors: {}
    }
  }

  //TODO optimize this validation and make it work for the other fields
  //https://waffle.io/devugees/digital-notice-board/cards/5ac2807897f9dd00256b555a
  onChange(field, value) {
    let data = {...this.state.form};
    data[field] = value
    this.setState({form: data})
  }

  render() {
    return (
      <Form onSubmit={(e) => this.props.sendChildInfo(e, this)}>
        <h1>{this.props.data._id ? "Edit Slide" : "Add Slide"}</h1>
        <FormGroup>
          <Label for="examplePassword">Title</Label>
          <Input
            id="title"
            defaultValue={this.state.form.title}
          />
        </FormGroup>
        <FormGroup>
          <label>Description</label>
          <input
            className="form-control"
            id="description"
            type="text"
            defaultValue={this.state.form.description}
          />
        </FormGroup>
        <FormGroup>
          <label>Display Date</label>
          <input
            className="form-control"
            id="displayDate"
            type="date"
            defaultValue={this.state.form.displayDate}
          />
        </FormGroup>
        <FormGroup>
          <label>Expiry Date</label>
          <input
            className="form-control"
            id="expiryDate"
            type="date"
            defaultValue={this.state.form.expiryDate}
          />
        </FormGroup>
        <FormGroup>
          <Label>Code Snippet</Label>
          <Input
            id="content"
            type="textarea"
            defaultValue={this.state.form.content}
          />
        </FormGroup>
        <div className="d-flex justify-content-between">
          <a className="text-muted" href="#">Delete this Slide</a>
          <button type="submit" className="btn btn-primary">{this.props.data._id ? "Edit" : "Add"}</button>
      </div>
      </Form>
    );
  }
}

export default AddCode;
