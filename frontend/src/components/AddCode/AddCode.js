import React from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText
} from 'reactstrap';

class AddCode extends React.Component {
  state = {
    form: this.props.data,
    fields: {},
    errors: {}
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
      <Form onSubmit={this.props.sendChildInfo}>
        <h1>Add Code</h1>
        <FormGroup>
          <Label for="examplePassword">Title</Label>
          <Input
            onChange={(e) => this.onChange(e.target.id, e.target.value)}
            id="title"
            value={this.state.form.title}
          />
        </FormGroup>
        <FormGroup>
          <label>Description</label>
          <input
            onChange={(e) => this.onChange(e.target.id, e.target.value)}
            className="form-control"
            id="description"
            type="text"
            value={this.state.form.description}
          />
        </FormGroup>
        <FormGroup>
          <label>Display Date</label>
          <input
            onChange={(e) => this.onChange(e.target.id, e.target.value)}
            className="form-control"
            id="displayDate"
            type="date"
            value={this.state.form.displayDate}
          />
        </FormGroup>
        <FormGroup>
          <label>Expiry Date</label>
          <input
            onChange={(e) => this.onChange(e.target.id, e.target.value)}
            className="form-control"
            id="expiryDate"
            type="date"
            value={this.state.form.expiryDate}
          />
        </FormGroup>
        <FormGroup>
          <Label>Code Snippet</Label>
          <Input
            onChange={(e) => this.onChange(e.target.id, e.target.value)}
            id="content"
            type="textarea"
            value={this.state.form.content}
          />
        </FormGroup>
        <div class="d-flex justify-content-between">
          <a className="text-muted" href="#">Delete this Slide</a>
          <button type="submit" className="btn btn-primary">Add</button>
      </div>
      </Form>
    );
  }
}

export default AddCode;
