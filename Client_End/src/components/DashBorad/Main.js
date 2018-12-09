import React from 'react';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Main from '../Images/h2Main.jpg'
import { Tabs, Tab, Select, MenuItem, Switch, Toolbar, Divider, AppBar, Button, Typography, TextField, Paper } from '@material-ui/core';
import { Line, Circle } from 'rc-progress';
import Footer from './footer'
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

    menuButton: {
        marginLeft: -12,
        marginRight: 20,
        flexGrow: 1
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
        "fontFamily": '"Segoe UI",sans-serif',
    },
    pap: {
        zIndex: -1,
        height: 55
    }, img: {

        width: '100%',
        height: "20%",
        backgroundImage: `url(${Main})`,
        backgroundSize: 'cover',
        backkgroundRepeat: 'no-repeat',
        paddingBottom: '3%',
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
class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { progressValue: 0, pro: 0, bahtrooms: 0, address: '', PropertyType: '', imageP: '', phoneNumber: '' }
        this.handleBack = this.handleBack.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }
    handleQuestion() {

    }
    handleChange = (event, value) => {
        this.setState({ PropertyType: event.target.value })
    };
    handleBack() {
        this.setState({ pro: this.state.pro - 10, progressValue: this.state.progressValue - 33.3334 })

    }
    handleNext() {
        this.setState({ pro: this.state.pro + 10, progressValue: this.state.progressValue + 33.3334 })

    }
    componentDidMount() {
    }
    render() {

        const { classes } = this.props;
        const { value } = this.state;
        return (
            <MuiThemeProvider>

                <Grid className={classes.img}>
                    <Grid container item style={{ marginLeft: '5%' }} lg={11} >
                        <Grid item style={{ marginTop: '1%' }} lg={7}>

                            <img src={require('../Images/logoK.gif')} style={{ width: '140px', height: '140px' }} className={classes.menuButton} color="inherit" aria-label="Menu" />
                        </Grid>
                        <Grid container item lg={5} spacing={8} style={{ marginTop: '2%' }} >
                            <Grid item>
                                <Button onClick={this.props.handleHome} variant='contained' color='secondary'>View Now</Button>
                            </Grid>
                            <Grid item>
                                <Button onClick={this.props.handleSeller} style={{ color: 'white' }}>Rent Now</Button>
                            </Grid>
                            <Grid item>
                                <Button style={{ color: 'white' }}>Contact Us</Button>
                            </Grid>
                            <Grid item>
                                <Button onClick={this.props.handleLogin} style={{ color: 'white' }}>Login</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={11} style={{ marginLeft: '3%' }}>
                        <div className={classes.root} style={{ float: "center" }} >
                            <Typography variant="display3" className={classes.fontC} align="center" style={{ color: 'white', fontFamily: '"Consolas",sans-serif', fontWeight: 'bold' }} >
                                View Inn   Rent Inn
                            </Typography>
                            <br />
                            <Grid container spacing={16} alignItems='center' justify='center'>
                                <Grid item >
                                    <Typography variant="display1" className={classes.fontC} align="center" style={{ color: 'white', fontFamily: '"Consolas",sans-serif' }}>
                                        Residencial
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="display1" className={classes.fontC} size="small" align="center" style={{ color: 'white', fontFamily: '"Consolas",sans-serif' }}>
                                        Appartments
                                </Typography>
                                </Grid>
                            </Grid>
                            <Typography className={classes.fontC} variant="display1" align="center" style={{ color: 'white', fontFamily: '"Consolas",sans-serif' }}>
                                Commercial Properties
                            </Typography>
                            <center >
                                <Button variant="outlined" onClick={this.props.handleSeller} style={{ color: 'white', backgroundColor: '#0284a8' }} className={classes.button}>
                                    Rent Now
                                </Button>
                                <Button variant="contained" color="secondary" onClick={this.props.handleHome} className={classes.button}>
                                    View Now


                                </Button>
                            </center>
                        </div>
                    </Grid>
                </Grid>
                <Grid item style={{ marginTop: '3%' }} >
                    <Typography color='secondary' variant="display1" align="center"  >
                        Our Offerings
                    </Typography>
                </Grid>
                <Grid container lg={11} style={{ marginTop: '3%', marginLeft: '8%' }}>
                    <Grid container direction='column' justify='center' alignItems='center' item style={{ borderRight: '1px solid grey' }} lg={3}>
                        <Grid item><img src={require('../Images/houseMa.gif')} style={{ color: '#0284a8', height: '150px' }} /> </Grid>
                        <Grid item><Typography>Houses</Typography> </Grid>
                    </Grid>
                    <Grid container direction='column' item lg={4} justify='center' alignItems='center' style={{ borderRight: '1px solid grey', }} >
                        <Grid item> <img src={require('../Images/bussiness.gif')} style={{ height: '120px', }} /> </Grid>
                        <Grid item style={{ marginTop: '5%' }}> <Typography>Bussiness Commercial</Typography> </Grid>
                    </Grid>
                    <Grid container direction='column' item lg={4} justify='center' alignItems='center' style={{}} >
                        <Grid item> <img src={require('../Images/houseMa.gif')} style={{ height: '150px' }} /> </Grid>
                        <Grid item> <Typography variant='subheading'> Apartments</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Footer />
            </MuiThemeProvider >
        )

    }

}

export default withStyles(styles)(MainPage)
