import React from 'react';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Tabs, Tab, Toolbar } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import ClippedDrawer from './Drawer';
import SwipeableTextMobileStepper from './Stepper';
import Divider from '@material-ui/core/Divider';
import Footer from './footer.js'
import { typography } from 'material-ui/styles';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { PictureServer } from '../../server/PictureServer';
const tutorialSteps = [
  {
    imgPath:
      'http://www.whitehouse51.com/pic/3.bp.blogspot.com/-oaG8cxgeHoQ/Un4kPOLX73I/AAAAAAAABpc/X--E-Uf5p6o/s1600/House-+HD-Wallpapers1391117.jpg',
  },
  {
    imgPath:
      'https://i.pinimg.com/originals/a5/67/88/a56788472a77f38b12204034e4aeccde.jpg',
  },
  {
    imgPath:
      'https://i.ytimg.com/vi/gp1R2Gmciq8/maxresdefault.jpg',
  },
  {
    imgPath:
      'https://wallpapercave.com/wp/wp2449477.jpg',
  },
  {
    imgPath:
      'https://www.bahriatowns.com/images/s4.jpg',
  },
];
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e3f2fd',
    },
    secondary: {
      main: '#fce4ec',
    },
  },

});

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  card: {
    minWidth: 175,
    width: 300,
    color: "black",
    paddingLeft: '50px'
  },
  imgRoot: {
    display: 'flex',
    justifyContent: 'left',
    marginLeft: '100px',
  }, icon: {
    color: "#6A1B9A",

  },
  fontC: {
    font: 'Arial Bold',
  },
  pap: {
    height: 60,
  }, img: {
    width: '100%',
    height: "75%",
    backgroundSize: 'cover',
    backkgroundRepeat: 'no-repeat',
    paddingBottom: '3%'
  },
  textColor: {
    color: 'white',
  },
  button: {
    margin: theme.spacing.unit,
  },
};
class DashBoard extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '' }
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };
  componentDidMount(){
  }
  render() {

    const { classes } = this.props;
    const { value } = this.state;
    return (
      <MuiThemeProvider>
        <Grid container >
          <Grid item>
            <AppBar color='primary' position="absolute">
              <Toolbar>
                <img src={require('../Images/logoK2.gif')} style={{ width: '70px', height: '60px' }} className={classes.menuButton} color="inherit" aria-label="Menu" />

                <Typography onClick={this.props.handleMain} variant="headline" color="inherit" className={classes.grow}>
                  Rent Inn
                </Typography>
                <Button color="secondary" onClick={this.props.handleSeller} style={{ color: 'white', outlineColor: 'white' }} variant='raised'>Rent Now</Button>
                <Button color="secondary" onClick={this.props.handleLogin} style={{ marginLeft: '1%', color: 'white' }} variant='raised'>Login</Button>
                
              </Toolbar>
            </AppBar>
          </Grid>
          <Grid item style={{ marginTop: '4%' }}><SwipeableTextMobileStepper tutorialSteps={tutorialSteps} /></Grid>
          <ClippedDrawer  properties={this.props.properties} images = {this.props.images}/>

        </Grid>
        <Footer />
      </MuiThemeProvider>
    )

  }

}

export default withStyles(styles)(DashBoard)
