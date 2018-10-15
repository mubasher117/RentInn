
import React from 'react';
import { HashRouter, BrowserRouter, Router, Route, Switch, Link } from 'react-router-dom';
import LoginView from './components/DashBorad/DashBoard_View';
const Root = () => (

  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={LoginView} />
    </Switch>
  </BrowserRouter >
);
export default Root;