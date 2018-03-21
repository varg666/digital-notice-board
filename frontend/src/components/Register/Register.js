import React from 'react';

class Register extends React.Component {
           render(){
            return (
                <div className="container">    
                    <div>
                        <div>   
                            <h1>Sign Up</h1>
                        </div>
                        <div id="register">   
                            <form action="/" method="post">
                            <div>
                                <label>
                                Email Address<span>*</span>
                                </label>
                                <input type="email" name="email"
                                    />
                            </div>
                        
                            <div>
                                <label>
                                    Password<span>*</span>
                                </label>
                                <input type="password" name="password"/><br/>
                                <label>
                                    Re-password<span>*</span>
                                </label>
                                <input type="password" name="repeatpassword"/><br/>
                            </div>
                        
                                <button>Register</button>
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


