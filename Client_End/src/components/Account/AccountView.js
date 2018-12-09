
import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { account_Status, account_Actions } from '../../constants/Account';
import { withRouter } from 'react-router'
import { AccountServer } from '../../server/Account';
import SellerLogin from './AccountChild';
import Footer from './footer'
import Avatar from '@material-ui/core/Avatar';
import Details from "./Details";
import { Typography, AppBar, GridList, Toolbar, Tooltip, GridListTile, GridListTileBar, TextField, Button, Grid } from '@material-ui/core';
const mapStateToProps = (state) => {//substribe
  console.log("****************************state:", state);
  return {
    account_status: state.account_Reducer.account_status,
    listings: state.account_Reducer.listings,
    ownerId: state.account_Reducer.ownerId
  };
};
const mapDispatchToProps = (dispatch) => {
  return {//to dispatch
    handleUserMain: () => { dispatch({ type: account_Actions.account_SignIn.USER }) },
    handleDetails: () => { dispatch({ type: account_Actions.account_SignIn.DETAILS }) },
    handleListings: (propertyId) => { dispatch(AccountServer.handleListings(propertyId)) },
    handleUser: (UserId) => { dispatch(AccountServer.handleUser(UserId)) },
  };

};
const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    width: 151,
  },
  callCard: {
    height: 'auto',
    width: 250,
    borderRadius: '10px',
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: '#0284a8',
  },
  iconSize: {
    fontSize: '45px'
  },
  grow: {
    flexGrow: 1
  },
  img: {
    height: 200,
    width: 1200,
    maxWidth: 2000,
  }
};
class AccountView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [], selecedtedRow: [], username: 'R',accountId:this.props.match.params.accountId
    }
    this.handleRentAgain=this.handleRentAgain.bind(this);
    this.handleSelectedItem = this.handleSelectedItem.bind(this);
  }
  handleSelectedItem(row) {
    this.setState({ selecedtedRow: row })
    this.props.handleDetails();
  }
  handleRentAgain() {
    this.props.history.push('/seller/' + this.state.accountId);
  }
  getAvatar() {
    if (this.props.ownerId.length > 0) {
      return (
        <Avatar className={this.props.classes.purpleAvatar}>{this.props.ownerId[0].name[0].toUpperCase()}</Avatar>
      );
    }
    else {
      return (
        <Avatar className={this.props.classes.purpleAvatar}>R</Avatar>);
    }
  }
  getName() {
    if (this.props.ownerId.length > 0) {
      return (
        <Typography style={{ color: 'white', marginRight: '1%' }}>{this.props.ownerId[0].name.toUpperCase()}</Typography>
      );
    }
    else {
      return (
        <Typography style={{ color: 'white' }}>Rent Inn</Typography>);
    }
  }
  componentWillReceiveProps(ItemsProps) {
    this.setState({ listings: ItemsProps.listings, username: ItemsProps.username });
  }
  componentDidMount() {
    this.props.handleListings(this.props.match.params.accountId);
  }
  getScreen(status) {
    console.log("I am from account Component getScreen: " + status);
    switch (status) {
      case account_Status.account_SignIn.OWNER_ID:
        return (
          this.props.handleUser(this.props.match.params.accountId));
        break;
      case account_Status.account_SignIn.LISTING:
        return (
          <SellerLogin listings={this.props.listings} handleRentAgain={this.handleRentAgain} handleSelectedItem={this.handleSelectedItem} />);
        break;
      case account_Status.account_SignIn.USER:
        return (
          <SellerLogin listings={this.props.listings} handleRentAgain={this.handleRentAgain} handleSelectedItem={this.handleSelectedItem} />);
        break;
      case account_Status.account_SignIn.DETAILS:
        return (
          <Details handleUserMain={this.props.handleUserMain} handleRentAgain={this.handleRentAgain} selecedtedRow={this.state.selecedtedRow} />);
        break;
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid lg={8}>
          <AppBar position="absolute">
            <Toolbar>
              <img src={require('../Images/logoK2.gif')} style={{ width: '70px', height: '60px' }} className={classes.menuButton} color="inherit" aria-label="Menu" />

              <Typography variant="headline" style={{ marginLeft: '2%' }} color="inherit" className={classes.grow}>
                Rent Inn
          </Typography>
              {this.getAvatar()}
              {this.getName()}
              <Button variant='raised' color='secondary' >Log Out </Button>
            </Toolbar>
          </AppBar>
        </Grid>
        {this.getScreen(this.props.account_status)}
        
      </div>
    );
  }
}
export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountView)));