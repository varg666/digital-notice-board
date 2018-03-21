import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            registerData : {
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
        const registerDataCopy = {...this.state.registerData};
        registerDataCopy[e.target.name] = e.target.value;
        this.setState({registerData : registerDataCopy});
    }
    handleSubmit(e) {
        e.preventDefault();
    }
    validateEmail(value) {
        if(!value) return true;
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(value);
    }
    

    render(){
       
        return (
                <div className="container">    
                    <div>
                        <div>   
                            <h1>Sign Up</h1>
                        </div>
                        <div id="register">   
                            <form 
                            onSubmit={this.handleSubmit}
                            action="/" 
                            method="post">
                            <div>
                                <label>
                                Email Address<span>*</span>
                                </label>
                                <input 
                                    type="text" 
                                    name="email"
                                    value={this.state.registerData.email}
                                    onChange={this.handleChange}
                                    onSubmit={this.validateEmail}
                                    />
                                    <div>{!this.validateEmail(this.state.registerData.email) ? <div>Invalid Email</div>  : null }
									</div>
                            </div>
                            <div>
                                <label>
                                    Password<span>*</span>
                                </label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    value={this.state.registerData.password}
                                    onChange={this.handleChange}  
                                    /><br/>
                                <label>
                                    Confirm Password<span>*</span>
                                </label>
                                <input 
                                    type="password" 
                                    name="confirmPassword" 
                                    value={this.state.registerData.confirmPassword}
                                    onChange={this.handleChange}    
                                    /><br/>
                                    <div>{(this.state.registerData.password !== this.state.registerData.confirmPassword ) ? "Passwords don't match" : "" }
									</div>
                            </div>
                        
                                <button onClick={(e) => this.handleChange(e)}>Register</button>
                                <p><a href="#">Login</a></p>
                                <p><a href="#">Forgot Password</a></p>
                            </form>
                        </div>
                    </div>
                 </div>
        );
    }

}



export default Register;


