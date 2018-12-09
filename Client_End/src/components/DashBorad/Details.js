import React from 'react';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Call from '@material-ui/icons/Call';
import { Map, InfoWindow, Marker, DirectionsRenderer, GoogleApiWrapper } from 'google-maps-react';
import PropTypes from 'prop-types';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import { Typography, AppBar, GridList, GridListTile, Paper, GridListTileBar, TextField } from '@material-ui/core';

import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
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

        lat: 31.5798194,
        lng: 74.3532931,
        name: 'x'
    },


];
const mapStyles = {
    width: '850px',
    height: '420px'
};

class Details extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: this.props.selcectedProperty.lat, lng: this.props.selcectedProperty.lan,
            activeStep: 0,
            showingInfoWindow: false,  //Hides or the shows the infoWindow
            activeMarker: {},          //Shows the active marker upon click
            selectedPlace: {},
            address: '', data: this.props.selcectedProperty
        };
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onClose = this.onClose.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
    }
    handleDrag(latP) {
        const lat = latP.latLng.lat();
        const lng = latP.latLng.lng();
        this.setState({ lat: lat, lng: lng })
    }
    handleChange = address => {

        this.setState({ address });
    };
    componentWillReceiveProps(itemProps) {
        this.setState({ data: itemProps.data, lat: itemProps.lan, lng: itemProps.lan })
    }
    handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(({ lat, lng }) =>
                this.setState({ lat: { lat, lng }.lat, lng: { lat, lng }.lng })
            );

    };
    onMarkerClick = (props, marker, e) => {
        alert(props)
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
        alert(this.props.selcectedProperty.rent)
        console.log(this.state.lat, this.state.lng)
        const { classes } = this.props;
        return (
            <Paper className={classes.root} style={{ margin: '1%' }} >
                <Grid container direction='column' style={{ height: '800px' }}>
                    <Grid item>
                        <Grid container style={{ marginTop: '4%' }} lg={10}>
                            <Grid item style={{ marginTop: '1%', marginBottom: '1%', marginLeft: '1%' }} lg={2.9}>
                                <GridList cols='1'>
                                    <GridListTile>
                                        <img src={this.state.data.MainImage} style={{ width: '220px', }} />
                                        <GridListTileBar
                                            title={this.state.data.rent}
                                        />
                                    </GridListTile>
                                </GridList>
                            </Grid>
                            <Grid container item direction='column' style={{ marginLeft: '1%' }} lg={5} spacing={7}>
                                <Grid item style={{ marginBottom: '7%' }}>
                                    <Typography variant='title'><b>{this.state.data.Address}</b></Typography>
                                </Grid>
                                <Grid container item spacing={8}>

                                    <Grid container item spacing={40} style={{ marginLeft: '1%' }} >
                                        <Grid item lg={4}>
                                            <Typography  >
                                                <b>Rent:</b>
                                            </Typography>
                                        </Grid>
                                        <Grid item lg={4}>
                                            <Typography  >
                                                {this.state.data.rent}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container item spacing={40} style={{ marginLeft: '1%' }} >
                                        <Grid item lg={4}>
                                            <Typography  >
                                                <b>Type:</b>
                                            </Typography>
                                        </Grid>
                                        <Grid item lg={4}>
                                            <Typography  >
                                                {this.state.data.PropertyType}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container item spacing={40} style={{ marginLeft: '1%' }}>
                                        <Grid item lg={4}>
                                            <Typography  >
                                                <b>Total Area:</b>
                                            </Typography>
                                        </Grid>
                                        <Grid item lg={4}>
                                            <Typography  >
                                                {this.state.data.Area} Marla
                                        </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container item spacing={40} style={{ marginLeft: '1%' }}>
                                        <Grid item lg={4}>
                                            <Typography  >
                                                <b>Bedrooms:</b>
                                            </Typography>
                                        </Grid>
                                        <Grid item lg={4}>
                                            <Typography  >
                                                {this.state.data.Bedrooms}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container item spacing={40} style={{ marginLeft: '1%' }}>
                                        <Grid item lg={4}>
                                            <Typography  >
                                                <b>Bathrooms:</b>
                                            </Typography>
                                        </Grid>
                                        <Grid item lg={4}>
                                            <Typography  >
                                                {this.state.data.Bathrooms}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container item direction='column' style={{ marginLeft: '5%' }} lg={2} >
                                <Grid item>
                                    <Typography variant='headline'>Call Owner</Typography>
                                </Grid>
                                <Grid item style={{ marginTop: '7%', marginLeft: '3%' }}>
                                    <AppBar color='secondary' position="relative" className={classes.callCard} >
                                        <Grid container style={{}} wrap="nowrap" lg={12} >
                                            <Grid item lg={3} style={{ marginTop: '4%' }}>
                                                <Call className={classes.iconSize} />
                                            </Grid>
                                            <Grid container item direction='column' lg={9} >
                                                <Grid item xs>
                                                    <Typography variant='title'>{this.props.sellectedOwner.name}</Typography>
                                                </Grid>
                                                <Grid item xs>
                                                    <Typography variant='subheading'>{this.props.sellectedOwner.phoneNo}</Typography>
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
                    <Grid item style={{ margin: '4%' }} lg={4}>
                        <Typography variant='headline'>Location:</Typography>
                        <Map
                            google={this.props.google}
                            zoom={16}
                            style={mapStyles}
                            initialCenter={{
                                lat: this.state.lat,
                                lng: this.state.lng
                            }}
                            onChildMouseMove={() => console.log('move')}
                        ><Marker
                                icon={<LocationOnIcon />}
                                name={this.state.selectedPlace.name}
                                position={{
                                    lat: this.state.data.lat,
                                    lng: this.state.data.lan
                                }}

                            />
                            <InfoWindow

                                marker={this.state.activeMarker}
                                visible={this.state.showingInfoWindow}
                                onClose={this.onClose}
                            >
                                <div>
                                    <Typography>{this.state.selectedPlace.name}</Typography>
                                </div>
                            </InfoWindow>
                        </Map>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

Details.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GoogleApiWrapper({
    apiKey: 'AIzaSyDF_eTEi1L1yTfScXvKHr_NghfY_u0NMbg'
})(Details));