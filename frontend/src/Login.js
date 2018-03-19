import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginData : {
                email: "",
                password:""
            }
        }
        this.clickHandler = this.clickHandler.bind(this);
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    }


    clickHandler(event) {
        console.log(this.state)
        console.log(event)
        const loginDataCopy = {...this.state.loginData};
        loginDataCopy[event.target.name] = event.target.value;
        this.setState({loginData : loginDataCopy});
    };
        
    validateForm: function() {      
        if(this.state.loginData.email).value ==  {

        }
      };






        render(){
            return (
    <div className="container">    
                    <div>
                        <div>   
                            <h1>Sign Up</h1>

                        </div>
        
                        <div id="login">   
                        
                            <form action="/" method="post">
                        
                            <div>
                                <label>
                                Email Address<span>*</span>
                                </label>
                                <input 
                                    value={this.state.loginData.email}
                                    onChange={}
                                    type="email"required autocomplete="off"/>
                            </div>
                        
                            <div>
                                <label>
                                    Password<span>*</span>
                                </label>
                                <input type="password"required autocomplete="off"/>
                            </div>
                        
                                <button onClick={(e) => this.clickHandler(e)}>Log In</button>
                                <p><a href="#">Register a new account</a></p>
                                <p><a href="#">Forgot Password</a></p>
                        
                        
                        </form>

                        </div>
                        
                    </div>


    </div>    
            );
        }


}



export default Login;