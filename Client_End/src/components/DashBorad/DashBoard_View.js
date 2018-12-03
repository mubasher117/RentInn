import React, { Component } from "react";
import DashBoard from './DashBoard_Child'
import { login_Status, login_Actions } from '../../constants/Login';
import { connect } from "react-redux";
import { withRouter } from 'react-router'
import LoginChild from './Login';
import SellerLogin from './SellerLogin'
import { DashBoardServer } from '../../server/DashBoard';
import Main from "./Main";
import {PictureServer} from '../../server/PictureServer'
import {picture_Actions} from '../../constants/Picture'
import store from "../../store";
import { Button } from "@material-ui/core";

const mapStateToProps = (state) => {//substribe
  console.log("****************************state:", state);
  return {
    login_status: state.login_Reducer.login_status,
    accounts: state.login_Reducer.accounts,
    properties:state.login_Reducer.properties,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {//to dispatch
    handleLogged: () => { dispatch({ type: login_Actions.login_SignIn.SELLER }) },
    handleHome: () => { dispatch({ type: login_Actions.login_SignIn.DASH }) },
    handleLoginAccount: () => { dispatch(DashBoardServer.handleAllAccounts()) },
    handleAllProperties: () => { dispatch(DashBoardServer.handleAllProperties()) },
    handleMain: () => { dispatch({ type: login_Actions.login_SignIn.HOME }) },

  };
};
class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = { accounts: this.props.accounts,properties:this.props.properties ,
                propertyId : "", url : ""
              }
    this.handleSeller = this.handleSeller.bind(this);
    this.handleDashBoard = this.handleDashBoard.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleOwnerId=this.handleOwnerId.bind(this);
    this.AddImage = this.AddImage.bind(this);
  }
  handleOwnerId(id){
    this.props.history.push('/Account/'+id)
  }
  handleLogin() {
    this.props.handleLoginAccount();
  }
  componentDidMount(){
    this.props.handleAllProperties();

  }
  componentWillReceiveProps(ownerIdProps) {
    this.setState({ accounts: ownerIdProps.accounts,properties:ownerIdProps.properties })
  }
  handleSeller() {
    this.props.history.push('/seller');
  }
  handleDashBoard() {
    this.props.history.push('/');
  }
  componentWillUnmount(){
    
  }
  AddImage(){
   PictureServer.AddPicture("5c020197f9f7ed3aa0f2d83a","https://firebasestorage.googleapis.com/v0/b/rentinn-2018.appspot.com/o/IMG_5008%20-%20Copy.JPG?alt=media&token=c28a2d89-0c43-4eed-8c17-4b40f57f09e2dsdsadas")
  }
  getScreen(status) {
    console.log("I am from login Component getScreen: " + status);
    switch (status) {
      case login_Status.login_SignIn.HOME:
        return (
          <Main handleLogin={this.props.handleLogin} handleSeller={this.handleSeller} handleHome={this.props.handleHome} />
          );
          
        break;
      case login_Status.login_SignIn.DASH:

        return (
          <DashBoard handleAdmin={this.handleAdmin} properties={this.state.properties} handleLogin={this.handleLogin}
            handleSeller={this.handleSeller} handleMain={this.props.handleMain} CheckServer = {this.CheckServer} images = {this.state.images}
          />);
        break;
      case login_Status.login_SignIn.LOGIN:
        return (
          <LoginChild handleOwnerId={this.handleOwnerId} accounts={this.state.accounts} handleLoginAccount={this.props.handleLoginAccount} handleMain={this.props.handleMain} handleHome={this.props.handleHome} />);
        break;
      case login_Status.login_SignIn.SELLER:
        return (
          <SellerLogin handleSeller={this.handleSeller} handleMain={this.props.handleMain} handleHome={this.props.handleHome} />);
        break;
    }
  }
  render() {
    
    return (
      <div>
        {this.getScreen(this.props.login_status)}
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginView));