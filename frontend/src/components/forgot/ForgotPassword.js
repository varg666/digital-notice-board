import React, { Component } from 'react';
import './ForgotPassword.css';


class ForgotPassword extends Component {
		constructor(props) {
			super(props);

			this.state = {
				data: {
				}
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
		const dataCopy = {...this.state.data};
		dataCopy[e.target.name] = e.target.value;
		this.setState({data : dataCopy});
	};

	validateEmail(value) { 
		if(!value) return true;     
		const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		return emailPattern.test(value);
		
	};


  render() {
    return (
      // Main html element for the React component
      <div id="resetpassdiv">
	        <h4 className="resetpasstitle">Reset Password</h4>
	        	<form onSubmit={this.handleSubmit}
								className="resetpassform">
								E-mail:<br />
									<input 
									type="text" 
									name="email" 
									value={this.state.data.email} 
									onChange={this.handleChange}
									onSubmit={this.validateEmail}
									className="resetpassinput" /> 
									<div>{!this.validateEmail(this.state.data.email) ? <div>Invalid Email</div>  : null }
									</div>
								<br />
								<br />
								<button onClick={(e) => this.handleChange(e)}
									className="resetpassbutton" 
									type="submit"
									
									>Reset Password</button>
	        	</form>
	        		<br />
	        	
	        	<a href="/login">login</a>
      </div>
      // !END Main html element for the React component
    );
  }
}

export default ForgotPassword;
