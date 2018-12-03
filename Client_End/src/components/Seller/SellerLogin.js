import React from 'react';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import SwipeableTextMobileStepper from './cardStepper';
import AddIcon from '@material-ui/icons/Add';

import ArrowBack from '@material-ui/icons/ArrowBack';
import Details from './Details';
import ImgMediaCard from './rentCard';
import { Typography, AppBar, GridList, Toolbar, Tooltip, GridListTile, GridListTileBar, TextField, Button } from '@material-ui/core';
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
class SellerLogin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeStep: 0, name: '', pass: '', Details: false
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.changePAge = this.changePAge.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    handleLogin() {
        if (this.state.name = 'Seller' && this.state.pass == '12345') {

        }
    }
    changePAge() {

        this.setState({ Details: true })
    }
    render() {
        const { classes } = this.props;
        if (this.state.Details == false) {
            return (
                <Grid container lg={10}>
                    <Grid item>
                        <AppBar position="absolute">
                            <Toolbar>
                                <img src={require('../Images/logoK2.gif')} style={{ width: '70px', height: '60px' }} className={classes.menuButton} color="inherit" aria-label="Menu" />

                                <Typography variant="headline" style={{ marginLeft: '2%' }} color="inherit" className={classes.grow}>
                                    Rent Inn
                            </Typography>
                                <Button variant='raised' color='secondary' onClick={this.props.handleHome} >Log Out </Button>
                            </Toolbar>
                        </AppBar>
                    </Grid>
                    <Grid container direction='column' justify='center' style={{ marginTop: '10%' }} alignItems='center' spacing={16}>
                        <Tooltip title="Rent It Again">
                            <Button variant="fab" color="secondary" onClick={this.props.handleSeller}>
                                <AddIcon />
                            </Button>
                        </Tooltip>

                    </Grid>
                    <ImgMediaCard changePAge={this.changePAge} />
                </Grid>
            );
        }
        else {
            return (
                <Grid style={{ marginLeft: '5%' }} lg={10} >
                    <Grid item>
                        <AppBar position="absolute">
                            <Toolbar>
                                <img src={require('../Images/logoK2.gif')} style={{ width: '70px', height: '60px' }} className={classes.menuButton} color="inherit" aria-label="Menu" />

                                <Typography variant="headline" style={{ marginLeft: '2%' }} color="inherit" className={classes.grow}>
                                    Rent Inn
                            </Typography>
                                <Button variant='raised' color='secondary' onClick={this.props.handleHome} >Log Out </Button>
                            </Toolbar>
                        </AppBar>
                    </Grid>
                    <Grid container  style={{ marginTop: '10%' }} spacing={16}>
                        <Grid item style={{marginLeft:'3%'}}>
                            <Tooltip title="Back">
                                <Button variant="fab" color="secondary" onClick={()=>this.setState({Details:false})}>
                                    <ArrowBack />
                                </Button>

                            </Tooltip>
                        </Grid>
                        <Grid item style={{marginLeft:'40%'}}>
                            <Tooltip title="Rent It Again">
                                <Button variant="fab" color="secondary">
                                    <AddIcon />
                                </Button>

                            </Tooltip>
                        </Grid>


                    </Grid>
                    <Details />

                </Grid>);
        }
    }
}

SellerLogin.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SellerLogin);
