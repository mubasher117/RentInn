
import React from 'react';
import {  BrowserRouter,  Route, Switch } from 'react-router-dom';
import LoginView from './components/DashBorad/DashBoard_View';
import SellerView from './components/Seller/SellerView';
import AccountView from './components/Account/AccountView'
const Root = () => (

  <BrowserRouter>
    <Switch >
      <Route exact path='/' component={LoginView} />
      <Route exact path='/Seller' component={SellerView} />
      <Route exact path='/Seller/:userId' component={SellerView} />
      <Route exact path='/Account/:accountId' component={AccountView}/>
    </Switch>
  </BrowserRouter >
);
export default Root;