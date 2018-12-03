import React from 'react';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Select, MenuItem, Switch, Divider, AppBar, Button, Typography, TextField, Paper } from '@material-ui/core';
import { Line, Circle } from 'rc-progress';
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
class SellerSucces extends React.Component {

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
                <Grid>
                    <AppBar position="absolute" className={classes.pap} color="primary" lg={8}>
                        <Grid container style={{ marginLeft: '4%' }}>
                            <Grid item>
                                <Typography style={{ color: 'white' }} variant='headline'>Rent Inn </Typography>
                            </Grid>

                        </Grid>

                    </AppBar>
                </Grid>
                <Grid container direction='column' lg={8} alignItems='center' justify='center' style={{ height: '70%', marginTop: '20%', marginLeft: '10%', marginBottom: '20%', width: '80%' }}>
                    <Grid item>
                        <Typography variant='headline'> Thank you for submitting your property</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='headline'> A Buyer Gonna See your Property</Typography>
                    </Grid>
                    <Grid item>
                        <Button variant='outlined' onClick={this.props.handleBack}>Home</Button>
                    </Grid>
                </Grid>
                <footer>
                    <Grid item style={{ marginTop: '2%', marginLeft: '6%' }} lg={4}>
                        <Divider />
                    </Grid>
                    <Grid item style={{ marginTop: '1%', marginLeft: '20%' }} lg={4}>

                        <Typography variant='subheading' style={{ marginTop: '1%', marginLeft: '45%' }}>Contact Us:</Typography>
                        <Grid container item style={{ marginLeft: '40%' }}>
                            <Grid>
                                <img src={require('../Images/soc.png')} style={{ height: '50px' }} />
                            </Grid>
                        </Grid>
                        <Typography style={{ marginLeft: '35%' }}>All Rights Reserved Copy Right Reserved Ltd Lahore Pakistan</Typography>

                    </Grid>
                </footer>
            </MuiThemeProvider>
        )

    }

}

export default withStyles(styles)(SellerSucces)
