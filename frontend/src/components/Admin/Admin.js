import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ModulesSideBar from '../modules-side-bar/ModulesSideBar';
import App from '../../App'
import Login from '../Login/Login';
import Register from '../Register/Register';
import ForgotPassword from '../forgot/ForgotPassword';
import Links from './link';


const Router = () => (
  <BrowserRouter>
    <Switch>
     <Route exact path='/' component={App} />
     <Route exact path='/Admin' component={Links} />
     <Route exact path='/Admin/login' component={Login} />
     <Route exact path='/Admin/Register' component={Register} />
     <Route exact path='/Admin/resetPassword' component={ForgotPassword} />

    </Switch>
  </BrowserRouter>

  );

export default Router;