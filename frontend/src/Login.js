import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }
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
                                <input type="email"required autocomplete="off"/>
                            </div>
                        
                            <div>
                                <label>
                                    Password<span>*</span>
                                </label>
                                <input type="password"required autocomplete="off"/>
                            </div>
                        
                                <button>Log In</button>
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