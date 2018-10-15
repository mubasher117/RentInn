import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import SwipeableTextMobileStepper from './cardStepper';
import { Grid, Paper } from '@material-ui/core';
const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        width: 151,
    },
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
class SmallPaper extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { classes } = this.props;
        return (
            <Paper className={this.props.cardProps} style={{ marginTop: '3%', marginLeft: '2%', marginBottom: '2%', marginRight: '2%' }} >
                <Grid container style={{ marginLeft: '3%', marginTop: '2%' }}>
                    <Grid item style={{ marginTop: '2%' }}>
                        <SwipeableTextMobileStepper tutorialSteps={tutorialSteps} />
                    </Grid>
                    <Grid item style={{ marginLeft: '1%' }}>
                        <Typography gutterBottom variant="h5" component="h2">
                            <b>{this.props.houseName}</b>
                        </Typography>
                        <Grid container >
                            <Grid item>
                                <Typography style={{ marginTop: '2%' }} >
                                    <b>Rent:</b> {this.props.rent}PKR
                                        </Typography>


                                <Typography >
                                    <b>{this.props.bedroom} </b> Bedroom <b>{this.props.properySize}</b> Marla
                                        </Typography>
                            </Grid>
                            <Grid item style={{ marginLeft: '2%', marginBottom: '2%' }}>
                                <Button size='large' onClick={this.props.changePAge}>View Details</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
};
class ImgMediaCard extends React.Component {
    state = {
        activeStep: 0,
    };
    render() {
        const { classes } = this.props;
        return (
            <div style={{marginLeft:'10%'}}>
                <Grid container spacing={40}>
                    <Grid item style={{ marginLeft: '2%', marginTop: '3%' }}>
                        <SmallPaper cardProps={classes.card} houseName="5 Marla at Gulshan -e - Ravi ,Lahore" properySize="5" bedroom="4"  changePAge={this.props.changePAge} rent="25000" />
                    </Grid>
                    <Grid item style={{ marginLeft: '2%', marginTop: '3%' }}>
                        <SmallPaper cardProps={classes.card} houseName="5 Marla at Gulshan -e - Ravi ,Lahore" changePAge={this.props.changePAge} properySize="5" bedroom="4" rent="25000" />
                    </Grid>
                </Grid>
                <Grid container spacing={40}>
                    <Grid item style={{ marginLeft: '2%', marginTop: '3%' }}>
                        <SmallPaper cardProps={classes.card} houseName="5 Marla at Gulshan -e - Ravi ,Lahore" changePAge={this.props.changePAge} properySize="5" bedroom="4" rent="25000" />
                    </Grid>
                    <Grid item style={{ marginLeft: '2%', marginTop: '3%' }}>
                        <SmallPaper cardProps={classes.card} houseName="5 Marla at Gulshan -e - Ravi ,Lahore" changePAge={this.props.changePAge} properySize="5" bedroom="4" rent="25000" />
                    </Grid>
                </Grid>
                <Grid container spacing={40}>
                    <Grid item style={{ marginLeft: '2%', marginTop: '3%' }}>
                        <SmallPaper cardProps={classes.card} houseName="5 Marla at Gulshan -e - Ravi ,Lahore" changePAge={this.props.changePAge} properySize="5" bedroom="4" rent="25000" />
                    </Grid>
                    <Grid item style={{ marginLeft: '2%', marginTop: '3%' }}>
                        <SmallPaper cardProps={classes.card} houseName="5 Marla at Gulshan -e - Ravi ,Lahore" changePAge={this.props.changePAge} properySize="5" bedroom="4" rent="25000" />
                    </Grid>
                </Grid>
                
            </div>
        );
    }
}

ImgMediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};
SmallPaper.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);
