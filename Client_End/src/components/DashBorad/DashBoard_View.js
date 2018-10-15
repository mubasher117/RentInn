
import React, { Component } from "react";
import { connect } from "react-redux";
import DashBoard from './DashBoard_Child'
import { login_Status } from '../../constants/Login';
import {withRouter} from 'react-router'
const mapStateToProps = (state) => {//substribe
  console.log("****************************state:", state);
  return {
    login_status: state.login_Reducer.login_status,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {//to dispatch
  };
};
class LoginView extends Component {
  constructor(props) {
    super(props);
  }
  getScreen(status) {
    console.log("I am from login Component getScreen: " + status);
    switch (status) {
      case login_Status.login_SignIn.NEW:
        return (
          <DashBoard handleAdmin={this.handleAdmin}  handleUser={this.props.handleUser}
          />);
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