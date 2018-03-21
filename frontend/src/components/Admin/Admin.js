import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ModulesSideBar from '../modules-side-bar/ModulesSideBar';
import App from '../../App'
import Login from '../Login/Login';
import Admin from '../Admin/Admin';
import Register from '../Register/Register';
import ForgotPassword from '../forgot/ForgotPassword';


const Router = () => (
  <BrowserRouter>
    <Switch>
     <Route exact path='/' component={App} />
     <Route exact path='/login' component={Login} />
     <Route exact path='/Register' component={Register} />
     <Route exact path='/resetPassword' component={ForgotPassword} />

    </Switch>
  </BrowserRouter>

  );

export default Router;