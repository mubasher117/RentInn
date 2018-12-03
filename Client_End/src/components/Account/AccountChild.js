import React from 'react';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import Footer from './footer'


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
            activeStep: 0,
        };
        this.handleDetails = this.handleDetails.bind(this);
    }
    handleDetails(row) {
        this.props.handleSelectedItem(row);
    }
    render() {
        const { classes } = this.props;
        return (
            <MuiThemeProvider>
                <Grid container lg={10}>
                    <Grid container direction='column' justify='center' style={{ marginTop: '10%' }} alignItems='center' spacing={16}>
                        <Tooltip title="Rent It Again">
                            <Button variant="fab" color="secondary" onClick={this.props.handleRentAgain}>
                                <AddIcon />
                            </Button>
                        </Tooltip>
                    </Grid>
                    <ImgMediaCard handleDetails={this.handleDetails} listings={this.props.listings} changePAge={this.changePAge} />

                </Grid>
                <Footer />
            </MuiThemeProvider>
        );
    }
}

SellerLogin.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SellerLogin);
