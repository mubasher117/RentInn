import React from 'react';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Call from '@material-ui/icons/Call';
import PropTypes from 'prop-types';
import { Typography, AppBar } from '@material-ui/core';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Maps from './subMap';
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

        lat: 31.5794125,
        lng: 74.3525795,
        name: 'x'
    },
    {

        lat: 31.579184,
        lng: 74.3528531,
        name: 'x+'
    },
    {

        lat: 31.5802305,
        lng: 74.3532555,
        name: 'x'
    },


];
const mapStyles = {
    width: '850px',
    height: '420px'
};
class MapsParent extends React.Component {
    state = {
        activeStep: 0,
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}
    };
    handleMap() {
        return (

            <Map
                google={this.props.google}
                zoom={10}

                style={mapStyles}
                initialCenter={{
                    lat: 31.5204,
                    lng: 74.3587
                }}

            >
                {this.props.data.map((val) => <Marker
                    onClick={this.onMarkerClick}
                    name={val.name}
                    position={{
                        lat: val.lat,
                        lng: val.lan
                    }}
                />)}

                <InfoWindow

                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>
            </Map>
        )
    }
    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
        console.log(props);
    }
    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };
    render() {
        const { classes } = this.props;
        return (

            <Grid container direction='column' lg={12} sm={8} style={{ margin: '4%' }} style={{height:'600px'}}>
                <Grid item>
                    <Typography variant='headline'>Properties Available For Rent:</Typography></Grid>
                <Grid item lg={2} sm={8} style={{ margin: '4%' }}>
                    <Grid item style={{ marginBottom: '34%' }}><Typography variant='headline'>Location:</Typography></Grid>
                    <Grid item >
                        {this.handleMap()}
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

Maps.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GoogleApiWrapper({
    apiKey: 'AIzaSyDF_eTEi1L1yTfScXvKHr_NghfY_u0NMbg',
})(MapsParent));