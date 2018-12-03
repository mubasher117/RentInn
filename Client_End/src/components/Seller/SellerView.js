
import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { seller_Status, seller_Actions } from '../../constants/Seller';
import { withRouter } from 'react-router'
import SellerChild from './SellerChild';
import SellerSucces from './SellerComplete';
import { SellerServer } from '../../server/Seller';
import Avatar from '@material-ui/core/Avatar';
import { Typography, AppBar, GridList, Toolbar, Tooltip, GridListTile, GridListTileBar, TextField, Button, Grid } from '@material-ui/core';
import { stat } from "fs";




const mapStateToProps = (state) => {//substribe
  console.log("****************************state:", state);
  return {
    seller_status: state.seller_Reducer.seller_status,
    seller_id: state.seller_Reducer.seller_id,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {//to dispatch
    handleRegister: (name, password, email, phoneNumber) => {
      dispatch(SellerServer.handleRegister(name, password, email, phoneNumber))
    },
    handleOrder: (ownerid, lat, lan, fullAddres, propertyType, bedrooms, bathrooms, garage, ac, rent,MainImage) => {
      dispatch(SellerServer.handleProperty(ownerid, lat, lan, fullAddres, propertyType,
        bedrooms, bathrooms, garage, ac, rent, MainImage))
    }
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
class SellerView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null, lng: null,
      fullAddres: '', bahtrooms: 0, garage: false, ac: false, Bedroooms: 0,
      PropertyType: '', imageP: '', phoneNumber: '', name: '', Password: '', Email: '', rent: '', ownerId: '',
      MainImage : null

    }
    this.handleBack = this.handleBack.bind(this);
    this.handleProperty = this.handleProperty.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.logout = this.logout.bind(this);
  }
  handleBackClick() {
    if (this.props.match.params.userId != undefined) {
      this.props.history.push('/Account/' + this.props.match.params.userId);
    }
    else {
      this.props.history.push('/Account/' + this.props.seller_id);

    }
  }
  getAvatar() {
    if (this.props.match.params.userId !== undefined) {
      return (
        <Avatar className={this.props.classes.purpleAvatar}>{'Q'}</Avatar>
      );
    }
    else {
      return (
        <Avatar className={this.props.classes.purpleAvatar}>R</Avatar>);
    }
  }
  getName() {
    if (this.props.match.params.userId !== undefined) {
      return (
        <Typography style={{ color: 'white', marginRight: '1%' }}>{'User Inn'}</Typography>
      );
    }
    else {
      return (
        <Typography style={{ color: 'white' }}>Rent Inn</Typography>);
    }
  }
  handleProperty(lat, lan, fullAddress, propertyType, bedrooms, bathrooms,
    garage, ac, name, password, email, phoneNumber, rent, isUserAvailable , MainImage) {
alert('in handle property'+MainImage)
    this.setState({
      lat: lat, lan: lan, fullAddres: fullAddress, PropertyType: propertyType
      , Bedroooms: bedrooms, bahtrooms: bathrooms, garage: garage, ac: ac, name: name,
      Password: password, Email: email, phoneNumber: phoneNumber, rent: rent, MainImage :MainImage
    })
    
    if (isUserAvailable === true) {
      this.props.handleOrder(this.props.match.params.userId, lat, lan, fullAddress, propertyType, bedrooms,
        bathrooms, garage, ac, rent,MainImage )
    }
    else {

      this.props.handleRegister(name, password, email, phoneNumber);
    }
  }
  handleBack() {
    this.props.history.push('/');
  }
  getScreen(status) {
    console.log("I am from seller Component getScreen: " + status);
    switch (status) {
      case seller_Status.seller_SignIn.NEW:
        return (
          <SellerChild isLogged={this.props.match.params.userId} handleBackClick={this.props.handleBackClick} handleProperty={this.handleProperty} />);
        break;
      case seller_Status.seller_SignIn.SELLER_DATA:
      alert(this.state.MainImage)
        return (
          this.props.handleOrder(this.props.seller_id, this.state.lat, this.state.lan, this.state.fullAddres, this.state.PropertyType, this.state.Bedroooms, this.state.bahtrooms, this.state.garage, this.state.ac, this.state.rent,this.state.MainImage)
        );
        break;
      case seller_Status.seller_SignIn.SUCCESS:
        return (
          <SellerSucces handleBack={this.handleBackClick} />);
        break;
    }
  }
  logout(){
    console.log("got in logout")
    this.props.history.push('/');
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="absolute">
          <Toolbar>
            <img src={require('../Images/logoK2.gif')} style={{ width: '70px', height: '60px' }} className={classes.menuButton} color="inherit" aria-label="Menu" />

            <Typography variant="headline" style={{ marginLeft: '2%' }} color="inherit" className={classes.grow}>
              Rent Inn
          </Typography>
            {this.getAvatar()}
            {this.getName()}
            <Button onclick = {this.logout} variant='raised' color='secondary' >Log Out </Button>
          </Toolbar>
        </AppBar>
        {this.getScreen(this.props.seller_status)}
      </div>
    );
  }
}
export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(SellerView)));