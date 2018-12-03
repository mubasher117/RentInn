
import React from 'react';
import {  BrowserRouter,  Route, Switch } from 'react-router-dom';
import LoginView from './components/DashBorad/DashBoard_View';
import SellerView from './components/Seller/SellerView';
const Root = () => (

  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={LoginView} />
      <Route exact path='/Seller' component={SellerView} />
    </Switch>
  </BrowserRouter >
);
export default Root;