import React from 'react';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Select, MenuItem, Switch, Divider, AppBar, Button, Typography, TextField, Paper } from '@material-ui/core';
import { Line, Circle } from 'rc-progress';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailOutlineRounded from '@material-ui/icons/MailOutlineRounded'
import Call from '@material-ui/icons/Call';
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
        zIndex: -1,
        height: 55
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
    progressBarS: {
        paddingLeft: '300px',
        width: '600px',
        height: '50px'
    }
};
class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    componentDidMount() {
    }
    render() {

        const { classes } = this.props;
        const { value } = this.state;
        return (
            <MuiThemeProvider>

                <footer style={{
                    backgroundColor: '#292c2f',
                    boxSizing: 'borderBox',
                    textAlign: 'left',
                    font: 'bold 16px sans-serif',
                    marginTop: '4%',

                    padding: '55px 50px',
                }}>
                    <Grid container style={{maxWidth:'2000px',width:'100%'}}>
                        <Grid item lg={4} >
                            <div style={{}}>

                                <img src={require('../Images/logoK2.gif')} style={{ width: '70px', height: '60px' }} color="inherit" aria-label="Menu" />


                                <Typography variant='headline' style={{ color: '#ffffff', marginTop: '3%' }}><i>Sale into your new home</i></Typography>

                                <p style={{
                                    color: '#8f9296',
                                    fontSize: '14px',
                                    margin: 0,
                                    marginTop: '3%'
                                }}>Rent Inn &copy; 2018</p>
                            </div>

                        </Grid>
                        <Grid container item direction='column' lg={4} spacing={4}>
                            <Grid item>
                                <Grid container item >
                                    <Grid item lg={2}>
                                        <LocationOnIcon color='white' style={{
                                            backgroundColor: '#33383b',
                                            color: '#ffffff',
                                            fontSize: '25px',
                                            width: '38px',
                                            height: '38px',
                                            borderRadius: '50%',
                                            textAlign: 'center',
                                            lineHeight: '42px',
                                            margin: '10px 15px',
                                            verticalAlign: 'middle',
                                        }} />
                                    </Grid>
                                    <Grid container item direction='column' lg={4} style={{ marginTop: '2%' }}>
                                        <Grid item>
                                            <Typography style={{
                                                fontWeight: 'normal',
                                                fontSize: '14px',
                                                color: '#ffffff',
                                            }}>KICS ,UET </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography style={{
                                                color: '#ffffff',
                                            }}><b>Lahore, Pakistan</b></Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container item >
                                    <Grid item lg={2}>
                                        <Call color='white' style={{
                                            backgroundColor: '#33383b',
                                            color: '#ffffff',
                                            fontSize: '25px',
                                            width: '38px',
                                            height: '38px',
                                            borderRadius: '50%',
                                            textAlign: 'center',
                                            lineHeight: '42px',
                                            margin: '10px 15px',
                                            verticalAlign: 'middle',
                                        }} />
                                    </Grid>
                                    <Grid container item direction='column' lg={4} style={{ marginTop: '2%' }}>
                                        <Typography style={{ color: 'white' }}> +92301-8304642</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container item >
                                    <Grid item lg={2}>
                                        <a target="_top"
                                            rel="noopener noreferrer"
                                            href="mailto:test@example.com" >
                                            <MailOutlineRounded style={{
                                                backgroundColor: '#33383b',
                                                color: '#ffffff',
                                                fontSize: '25px',
                                                width: '38px',
                                                height: '38px',
                                                borderRadius: '50%',
                                                textAlign: 'center',
                                                lineHeight: '42px',
                                                margin: '10px 15px',
                                                verticalAlign: 'middle',
                                            }} />
                                        </a>
                                    </Grid>
                                    <Grid item lg={4} style={{ marginTop: '2%' }}>
                                        <Typography style={{ color: 'white' }}> 2016cs312@uet.edu.pk</Typography>

                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container item direction='column' lg={4} spacing={16}>
                            <Grid item style={{ marginLeft: '6%' }}>
                                <Typography style={{ color: 'white' }}> <b>About Us:</b></Typography>

                            </Grid>
                            <Grid container item lg={6} style={{ marginLeft: '6%' }}>
                                <Typography style={{ color: 'white' }}> We are very Company We are very Property Dealer.We are Awsome </Typography><Typography style={{ color: 'white' }}>We are Best In the World </Typography><Typography style={{ color: 'white' }}>We are Best In the World </Typography>


                            </Grid>
                            <Grid container item>
                                <Grid item >
                                    <img src={require('../Images/facebook.gif')} style={{ width: '70px', height: '60px' }} />

                                </Grid>
                                <Grid item >
                                    <img src={require('../Images/twitter.gif')} style={{ width: '70px', height: '60px' }} />

                                </Grid>
                                <Grid item >
                                    <img src={require('../Images/gmail.gif')} style={{ width: '90px', height: '60px' }} />

                                </Grid>
                                <Grid item >
                                    <img src={require('../Images/linkin.gif')} style={{ width: '70px', height: '60px' }} />

                                </Grid>

                            </Grid>


                        </Grid>
                    </Grid>
                </footer>
            </MuiThemeProvider>
        )

    }

}

export default withStyles(styles)(Footer)
