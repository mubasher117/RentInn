import React from 'react';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Tabs, Tab } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import ClippedDrawer from './Drawer';
import SwipeableTextMobileStepper from './Stepper';
const tutorialSteps = [
  {
    imgPath:
      'https://www.lionhdb.com/wp-content/uploads/2018/04/1cd02126-9e76-4a37-a1d5-c02c59193e39-1040x623.jpg',
  },
  {
    imgPath:
      'https://cdn.cnn.com/cnnnext/dam/assets/161205135716-03-karachi-hotel-pakistan-fire-full-169.jpg',
  },
  {
    imgPath:
      'https://www.aarz.pk/uploads/properties/2017/6/commercial-shops-apartments-for-sale-bahria-civic-center-phase-4-68879-image-1-actual.jpg',
  },
  {
    imgPath:
      'https://i2.wp.com/www.ghar47.com/wp-content/uploads/2018/04/2-Kanal-brand-new-house-for-sale-in-Y-Block-DHA-Phase-3-Lahore-1.jpg?resize=770%2C386&ssl=1',
  },
  {
    imgPath:
      'https://www.bahriatowns.com/images/s4.jpg',
  },
];
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#F0F0F7',
      main: '#707070',
      dark: '#002884',
      contrastText: '#fff',
    },

    secondary: {
      light: '#F0F0F7',
      main: '#6A1B9A',

      dark: '#333366',
      contrastText: '#F0F0F7',
    },
    fontcolor: {
      main: '#FAFAFA',
    }
  },

});

const styles = {
  root: {
    top: '20%',
    left: '30%',
    paddingTop: '70px'
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
    zIndex: -1
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
  render() {
    
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <MuiThemeProvider>
        <Grid container >
          <Grid item>
            <AppBar position="absolute" className={classes.pap} color="primary">
              <Tabs value={value} indicatorColor="primary"  onChange={this.handleChange}>
                <Tab position='center' label="Rent Inn" />
              </Tabs>
              {value == 0}
            </AppBar>
          </Grid>
          <Grid item style={{marginTop:'4%'}}><SwipeableTextMobileStepper tutorialSteps={tutorialSteps}/></Grid>
          <ClippedDrawer/>
        </Grid>
      </MuiThemeProvider>
    )

  }

}

export default withStyles(styles)(DashBoard)
