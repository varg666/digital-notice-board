import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ModulesSideBar from '../modules-side-bar/ModulesSideBar';
import App from '../../App'
import Login from '../Login/Login';
import Admin from '../Admin/Admin';


const Router = () => (
  <BrowserRouter>
    <Switch>
     <Route exact path='/' component={App} />
     <Route exact path='/login' component={Login} />
     <Route exact path='/admin:id' component={Admin} />

    </Switch>
  </BrowserRouter>

  );

export default Router;