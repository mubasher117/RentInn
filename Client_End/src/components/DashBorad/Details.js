import React from 'react';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Call from '@material-ui/icons/Call';
import PropTypes from 'prop-types';
import SwipeableTextMobileStepper from './cardStepper';
import { Typography, AppBar } from '@material-ui/core';
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
    img: {
        height: 200,
        width: 1200,
        maxWidth: 2000,
    }
};
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
class Details extends React.Component {
    state = {
        activeStep: 0,
    };
    render() {
        const { classes } = this.props;
        return (
            <Grid container direction='column'>
                <Grid item>
                    <Grid container style={{ marginTop: '4%' }} lg={12}>
                        <Grid item style={{ marginLeft: '2%' }} lg={4}>
                            <SwipeableTextMobileStepper tutorialSteps={tutorialSteps} />
                        </Grid>
                        <Grid container item direction='column' lg={4} spacing={8}>
                            <Grid item>
                                <Typography variant='title'><b>5 Marla House at Gulshan -e - Ravi ,Lahore</b></Typography>
                            </Grid>
                            <Grid container item spacing={40} >
                                <Grid item lg={4}>
                                    <Typography  >
                                        <b>Rent:</b>
                                    </Typography>
                                </Grid>
                                <Grid item lg={4}>
                                    <Typography  >
                                        12500/Month
                            </Typography>
                                </Grid>
                            </Grid>
                            <Grid container item spacing={40} >
                                <Grid item lg={4}>
                                    <Typography  >
                                        <b>Type:</b>
                                    </Typography>
                                </Grid>
                                <Grid item lg={4}>
                                    <Typography  >
                                        House
                            </Typography>
                                </Grid>
                            </Grid>
                            <Grid container item spacing={40}>
                                <Grid item lg={4}>
                                    <Typography  >
                                        <b>Total Area:</b>
                                    </Typography>
                                </Grid>
                                <Grid item lg={4}>
                                    <Typography  >
                                        5 Marla
                            </Typography>
                                </Grid>
                            </Grid>
                            <Grid container item spacing={40}>
                                <Grid item lg={4}>
                                    <Typography  >
                                        <b>Bedrooms:</b>
                                    </Typography>
                                </Grid>
                                <Grid item lg={4}>
                                    <Typography  >
                                        5
                            </Typography>
                                </Grid>
                            </Grid>
                            <Grid container item spacing={40}>
                                <Grid item lg={4}>
                                    <Typography  >
                                        <b>Bathrooms:</b>
                                    </Typography>
                                </Grid>
                                <Grid item lg={4}>
                                    <Typography  >
                                        3
                            </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container item direction='column' lg={3} >
                            <Grid item>
                                <Typography>Call Owner</Typography>
                            </Grid>
                            <Grid item>
                                <AppBar position="relative" className={classes.callCard} >
                                    <Grid container style={{}} wrap="nowrap" lg={12} >
                                        <Grid item lg={3} style={{ marginTop: '4%' }}>
                                            <Call className={classes.iconSize} />
                                        </Grid>
                                        <Grid container item direction='column' lg={9} >
                                            <Grid item xs>
                                                <Typography variant='title'> Muhammad Imran Isamil Siddiqui</Typography>
                                            </Grid>
                                            <Grid item xs>
                                                <Typography variant='subheading'> 0300-12312312</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </AppBar>
                            </Grid>
                        </Grid>
                        <Grid item>

                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={2} sm={8} style={{ margin: '4%' }}>
                    <Typography variant='headline'>Location:</Typography>
                    <img src={require('./h.jpg')} style={{ width: '900px', height: '250px' }} />
                </Grid>
            </Grid>
        );
    }
}

Details.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Details);
