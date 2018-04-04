import React from 'react';
import '../login/style.css';
import {Form, FormGroup, Input, Label, Nav, NavItem, NavLink} from 'reactstrap';

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
      <Form>
        <FormGroup onSubmit={this.handleSubmit} action="/" method="post">

          <div className="inputGroup inputGroup1">
            <Label for="email1">Email</Label>
            <Input type="text" id="email" className="email" type="text" name="email" required value={this.state.registerData.email} onChange={this.handleChange} onSubmit={this.validateEmail} maxlength="256" placeholder="Enter Email"/>
            <div>{!this.validateEmail(this.state.registerData.email)
                ? <div>Invalid Email</div>
                : null}
            </div>
          </div>

          <div className="inputGroup inputGroup2">
            <Label for="password">Password</Label>
            <Input type="password" id="password" className="password" name="password" required value={this.state.registerData.password} onChange={this.handleChange} placeholder="Enter Password"/>
          </div>
          <div className="inputGroup inputGroup3">
            <button id="login">Register</button>
          </div>
          <br/>
          <Nav>
            <NavItem>
              <NavLink href="/admin/login">Login</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/admin/reset">ForgetPassword</NavLink>
            </NavItem>

          </Nav>
        </FormGroup>
      </Form>
    );
  }
}

export default Register;
