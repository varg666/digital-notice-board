import React from 'react';
import '../login/style.css';
import {Button, Form, FormGroup, Input, Label, Nav, NavItem, NavLink} from 'reactstrap';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registerData: {
        email: "",
        password: "",
        confirmPassword: null
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateEmail = this.validateEmail.bind(this);

  }
  handleChange(e) {
    const registerDataCopy = {
      ...this.state.registerData
    };
    registerDataCopy[e.target.name] = e.target.value;
    this.setState({registerData: registerDataCopy});
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  validateEmail(value) {
    if (!value)
      return true;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(value);
  }

  render() {
    return (
      <Form className="border border-success rounded w-25 mx-auto mt-5 p-5">
        <FormGroup onSubmit={this.handleSubmit} action="/" method="post">

          <div className="inputGroup inputGroup1">
            <Label for="email1">Email</Label>
            <Input type="text" id="email" className="email" type="text" name="email" required value={this.state.registerData.email} onChange={this.handleChange} onSubmit={this.validateEmail} maxlength="256" placeholder="Enter Email"/>
            <div>{!this.validateEmail(this.state.registerData.email)
                ? <div>Invalid Email</div>
                : null}
            </div>
          </div>

          <div className="inputGroup inputGroup2 pt-3">
            <Label for="password">Password</Label>
            <Input type="password" id="password" className="password" name="password" required value={this.state.registerData.password} onChange={this.handleChange} placeholder="Enter Password"/>
          </div>
          <div className="inputGroup inputGroup3 pt-3">
            <Button color="success" block id="login">Register</Button>
          </div>
          <br/>
          <Nav className="justify-content-center">
            <NavItem>
              <NavLink href="/admin/login">Log in</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/admin/reset">Forgot Password?</NavLink>
            </NavItem>

          </Nav>
        </FormGroup>
      </Form>
    );
  }
}

export default Register;