import React from 'react';
import '../login/style.css';
import {Button, Form, FormGroup, Input, Label, Nav, NavItem, NavLink} from 'reactstrap';

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    //alert('email for resetting password sent');

  };

  handleChange(e) {
    console.log(this.state.data)
    const dataCopy = {
      ...this.state.data
    };
    dataCopy[e.target.name] = e.target.value;
    this.setState({data: dataCopy});
  };

  validateEmail(value) {
    if (!value)
      return true;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(value);
  };

  render() {
    return (
      <Form className="border border-success rounded w-25 mx-auto mt-5 p-5">
        <FormGroup onSubmit={this.handleSubmit}>
          <div className="inputGroup inputGroup1">
            <Label for="email1">Email</Label>
            <Input type="text" id="email" type="text" name="email" value={this.state.data.email} onChange={this.handleChange} onSubmit={this.validateEmail} className="email form-control" placeholder="Enter Email" maxlength="256"/>
            <div>{!this.validateEmail(this.state.data.email)
              ? <div>Invalid Email</div>
              : null}
            </div>
            <span className="indicator"></span>
          </div>
          <div className="inputGroup inputGroup3 pt-3">
            <Button color="success" block onClick={(e) => this.handleChange(e)} className="resetpassbutton" type="submit">Send</Button>
          </div>
          <br/>
          <Nav className="justify-content-center">
            <NavItem>
              <NavLink href="/admin/login">Log in</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/admin/Register">Register</NavLink>
            </NavItem>
          </Nav>
        </FormGroup>
      </Form>
    );
  }
}

export default ResetPassword;