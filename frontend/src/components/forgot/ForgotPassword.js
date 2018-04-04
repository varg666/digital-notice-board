import React from 'react';
import '../login/style.css';
import {Form, FormGroup, Input, Label, Nav, NavItem, NavLink} from 'reactstrap';

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
      <Form>
        <FormGroup onSubmit={this.handleSubmit}>
          <div className="inputGroup inputGroup1">
            <Label for="email1">Email</Label>
            <Input type="text" id="email" type="text" name="email" value={this.state.data.email} onChange={this.handleChange} onSubmit={this.validateEmail} className="email form-control" placeholder="Enter email" maxlength="256"/>
            <div>{!this.validateEmail(this.state.data.email)
              ? <div>Invalid Email</div>
              : null}
            </div>
            <span className="indicator"></span>
          </div>
          <div className="inputGroup inputGroup3">
            <button onClick={(e) => this.handleChange(e)} className="resetpassbutton" type="submit">Send</button>
          </div>
          <br/>
          <Nav>
            <NavItem>
              <NavLink href="/admin/login">Login</NavLink>
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