import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }
        render(){
            return (
    <div className="container">    
                    <ul>
                        <li class="tab active"><a href="#signup">Sign Up</a></li>
                        <li class="tab"><a href="#login">Log In</a></li>
                    </ul>
      
                    <div className="tab-content">
                        <div id="signup">   
                            <h1>Sign Up</h1>
          
                    <form action="/" method="post" >
          
                        <div>
                            <div>
                                <label>
                                    First Name<span>*</span>
                                </label>
                                <input type="text" required autocomplete="off" />
                            </div>
        
                            <div class="field-wrap">
                                <label>
                                    Last Name<span>*</span>
                                </label>
                                <input type="text"required autocomplete="off"/>
                            </div>
                        </div>

                        <div class="field-wrap">
                            <label>
                                Email Address<span>*</span>
                            </label>
                            <input type="email"required autocomplete="off"/>
                        </div>
          
                        <div class="field-wrap">
                            <label>
                                Set A Password<span class="req">*</span>
                            </label>
                            <input type="password"required autocomplete="off"/>
                        </div>
            
                            <button type="submit" class="button button-block">Get Started</button>
          
                    </form>

                </div>
        
                        <div id="login">   
                        
                            <form action="/" method="post">
                        
                            <div class="field-wrap">
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
                        
                                <p><a href="#">Forgot Password?</a></p>
                        
                        <button class="button button-block">Log In</button>
                        
                        </form>

                        </div>
                        
                    </div>




    </div>    
            );
        }



}



export default Login;