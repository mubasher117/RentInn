import React from 'react';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Select, MenuItem, Switch, Toolbar, Divider, AppBar, Button, Typography, TextField, FormControlLabel, Paper } from '@material-ui/core';
import { Line, Circle } from 'rc-progress';
import { linkSync } from 'fs';
import h2 from '../Images/h2.jpeg'
import Footer from './footer.js'
import { Map, InfoWindow, Marker, DirectionsRenderer, GoogleApiWrapper } from 'google-maps-react';

import axios from 'axios'
import firebase from '@firebase/app'
import '@firebase/firestore';
import '@firebase/storage';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';

var config = {
    projectId: "rentinn-2018",
    storageBucket: 'rentinn-2018.appspot.com',
};
firebase.initializeApp(config);
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
const mapStyles = {
    width: '380px',
    height: '300px'
};

class SellerChild extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            progressValue: 0,
            lat: '', lng: '', file: h2,
            activeStep: 0,
            showingInfoWindow: false,  //Hides or the shows the infoWindow
            activeMarker: {},          //Shows the active marker upon click
            selectedPlace: {},
            fullAddres: '',
            address: '', pro: 0, bahtrooms: 0, garage: false, ac: false, Bedroooms: 0,
            PropertyType: '', imageP: '', phoneNumber: '', name: '', Password: '', Email: '', rent: '',
            imageFile: [], url: ""
        }
        this.handleBack = this.handleBack.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePicture = this.handlePicture.bind(this);
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeMap = this.handleChangeMap.bind(this);
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onClose = this.onClose.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loggedUser = this.loggedUser.bind(this);
        this.setFile = this.setFile.bind(this);
        this.firebaseReuest = this.firebaseReuest.bind(this);
        this.UploadImages = this.UploadImages.bind(this);
    }
    firebaseReuest = (image) => {

        const fd = new FormData();
        fd.append('image', image, image.name);
        console.log(fd)
        axios.post('https://us-central1-rentinn-2018.cloudfunctions.net/testFunction', fd, {

        })
            .then(res => {
                console.log(res);
                const storage = firebase.storage();
                storage.ref(image.name).getDownloadURL()
                    .then(imageurl => {
                        this.setState({ url: imageurl })
                        console.log(this.state.url)
                        this.handleSubmit();
                    })

            })
    }
    UploadImages = () => {
        for (var i = 0; i < this.state.imageFile.length; ++i) {
            this.firebaseReuest(this.state.imageFile.item(i))
        }
    }
    setFile = (event) => {
        this.setState({ imageFile: event.target.files, file: URL.createObjectURL(event.target.files[0]) })
    }
    handlePicture(event) {
        this.setState({ file: URL.createObjectURL(event.target.files[0]) })
    }
    handleSubmit() {
        console.log(this.state.url)
        if (this.props.isLogged !== undefined) {
            this.props.handleProperty(this.state.lat, this.state.lng, this.state.fullAddres,
                this.state.PropertyType, this.state.Bedroooms, this.state.bahtrooms,
                this.state.garage, this.state.ac, this.state.name, this.state.Password,
                this.state.Email, this.state.phoneNumber, this.state.rent, true, this.state.url)
        }
        else {
            this.props.handleProperty(this.state.lat, this.state.lng, this.state.fullAddres,
                this.state.PropertyType, this.state.Bedroooms, this.state.bahtrooms,
                this.state.garage, this.state.ac, this.state.name, this.state.Password,
                this.state.Email, this.state.phoneNumber, this.state.rent, false, this.state.url)
        }
    }
    handleChange(event) {
        if (event.target.id !== 'ac' && event.target.id != 'garage') {
            this.setState({ [event.target.id]: event.target.value });

        }
        if (event.target.id == 'ac') {
            this.setState({ ac: event.target.checked })

        }
        if (event.target.id == 'garage') {
            this.setState({ garage: event.target.checked })
        }


    }
    handleDrag(latP) {
        const lat = latP.latLng.lat();
        const lng = latP.latLng.lng();
        this.setState({ lat: lat, lng: lng })
    }
    handleChangeMap = address => {
        this.setState({ address });
    };

    handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(({ lat, lng }) =>
                this.setState({ lat: { lat, lng }.lat, lng: { lat, lng }.lng })
            );


    };
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
    loggedUser() {
        if (this.props.isLogged !== undefined) {
            return (
                <Button color='secondary' style={{ marginLeft: '33%', marginBottom: '1%' , minHeight : '40px', minWidth :'100px'}} variant='contained' onClick={this.handleSubmit}>Submit</Button>
            )
        }
    }
    handleQuestion() {
        if (this.state.pro === 0) {
            return (
                <Grid container direction='column' spacing={16} item style={{}}>
                    <Grid item style={{ marginBottom: '3%', color: 'black' }}>
                        <Typography variant='display1'>Property Information:</Typography>
                    </Grid>
                    <Grid item style={{}}>
                        <Typography variant='subheading' style={{ fontFamily: '"Titillium Web",sans-serif' }} variant='subheading'>What kind of place are you want to Rent?</Typography>
                    </Grid>
                    <Grid item style={{}}>
                        <Select
                            required
                            style={{ width: '300px' }}
                            id='PropertyType'
                            value={this.state.PropertyType}
                            onChange={this.handleChangeSelect}

                        >
                            <MenuItem value={'House'}>House</MenuItem>
                            <MenuItem value={'Aparment'}>Apartment</MenuItem>
                            <MenuItem value={'Bussiness Commercial'}>Bussiness Commercial</MenuItem>
                        </Select>

                    </Grid>
                    <Grid container item >
                        <Grid item style={{ marginTop: '1%' }} lg={8}><Typography variant='subheading' style={{ fontFamily: '"Titillium Web",sans-serif' }} variant='subheading'>Is Garage Available?</Typography></Grid>
                        <Grid item style={{}} lg={4} ><Switch checked={this.state.garage} id='garage' onChange={this.handleChange} /></Grid>
                    </Grid>
                    <Grid container item style={{}} >
                        <Grid item style={{ marginTop: '1%' }} lg={8}><Typography variant='subheading' style={{ fontFamily: '"Titillium Web",sans-serif' }}>Is AirConditionar(AC) Available?</Typography></Grid>
                        <Grid item style={{}} lg={4}><Switch checked={this.state.ac} id='ac' onChange={this.handleChange} /></Grid>
                    </Grid>
                    <Grid container item style={{}} >
                        <Grid item style={{ marginTop: '1%' }} lg={8}><Typography variant='subheading' style={{ fontFamily: '"Titillium Web",sans-serif' }}>Rent of Property</Typography></Grid>
                        <Grid item lg={2}><TextField value={this.state.rent} id='rent' style={{ width: '80px' }} placeholder='10000' onChange={this.handleChange} /></Grid>
                    </Grid>
                    <Grid container item style={{}}>
                        <Grid item style={{ marginTop: '1%' }} lg={8}><Typography variant='subheading' style={{ fontFamily: '"Titillium Web",sans-serif' }} variant='subheading'>How many Bedroooms?</Typography></Grid>
                        <Grid item style={{}} lg={4}><TextField value={this.state.Bedroooms} id='Bedroooms' onChange={this.handleChange} type='number' style={{ width: '80px' }} /></Grid>
                    </Grid>
                    <Grid container item style={{}}>
                        <Grid item style={{ marginTop: '1%' }} lg={8}><Typography variant='subheading' style={{ fontFamily: '"Titillium Web",sans-serif' }} variant='subheading'>How many Bathrooms?</Typography></Grid>
                        <Grid item style={{}} lg={4}><TextField value={this.state.bahtrooms} id='bahtrooms' onChange={this.handleChange} type='number' style={{ width: '80px' }} /></Grid>
                    </Grid>
                </Grid>
            );
        }
        else if (this.state.pro === 10) {
            return (
                <Grid container direction='column' spacing={24} item style={{ height: '600px' }}>
                    <Grid item style={{ marginBottom: '3%', color: 'black', }}>
                        <Typography variant='display1' >Property Information:</Typography>
                    </Grid>

                    <Grid container item direction='column' style={{}} >
                        <Grid item style={{ height: '150px' }}>
                            <PlacesAutocomplete
                                value={this.state.address}
                                onChange={this.handleChangeMap}
                                onSelect={this.handleSelect}
                            >
                                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                    <div>
                                        <TextField
                                            {...getInputProps({
                                                placeholder: 'Search Property',
                                                className: 'location-search-input',
                                            })}
                                            style={{ width: '250px' }}
                                        />
                                        <div className="autocomplete-dropdown-container">
                                            {loading && <div>Loading...</div>}
                                            {suggestions.map(suggestion => {
                                                const className = suggestion.active
                                                    ? 'suggestion-item--active'
                                                    : 'suggestion-item';
                                                // inline style for demonstration purpose
                                                const style = suggestion.active
                                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                                return (
                                                    <div
                                                        {...getSuggestionItemProps(suggestion, {
                                                            className,
                                                            style,
                                                        })}
                                                    >
                                                        <span>{suggestion.description}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </PlacesAutocomplete>
                        </Grid>

                        <Grid item>
                            <Map
                                google={this.props.google}
                                zoom={14}
                                style={mapStyles}
                                center={new this.props.google.maps.LatLng(this.state.lat, this.state.lng)}
                                onChildMouseMove={() => console.log('move')}
                            ><Marker
                                    onClick={this.onMarkerClick}
                                    onDragend={(t, map, coord) => this.handleDrag(coord)}
                                    name={this.state.selectedPlace.name}
                                    draggable={true}
                                    position={{
                                        lat: this.state.lat,
                                        lng: this.state.lng
                                    }}
                                    onMouseDown={() => {
                                        console.log('say hello')
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
                </Grid>
            );
        }
        else if (this.state.pro === 20) {
            return (
                <Grid container direction='column' spacing={16} item style={{}}>

                    <Grid item style={{ marginLeft: '6%', marginBottom: '3%', color: 'black' }}>
                        <Typography variant='display1'>Property Information:</Typography>
                    </Grid>

                    <Grid item style={{}} >
                        <TextField value={this.state.fullAddres} id='fullAddres' onChange={this.handleChange} label='Title Of your Property' placeholder='5 Marla at Gulshan e Ravi, Lahore Pakistan' style={{ width: '250px' }} />
                    </Grid>
                    <Grid item style={{}} >
                        <TextField type='file' id='fullAddres' onChange={this.setFile} style={{ width: '250px' }}
                        />
                        
                    </Grid>
                    <Grid item style={{}} >
                        <img src={this.state.file} style={{ width: '250px', height: '220px' }} />
                    </Grid>
                    <Grid item style={{ align: 'center' }}>
                        {this.loggedUser()}
                    </Grid>
                </Grid>

            )
        }
        else if (this.state.pro === 30 && this.props.isLogged === undefined) {
            return (
                <Grid container direction='column' spacing={16} item style={{}}>

                    <Grid item style={{ marginLeft: '6%', marginBottom: '3%', color: 'black' }}>
                        <Typography variant='display1'>Personl Information:</Typography>
                    </Grid>

                    <Grid item style={{}} ><TextField value={this.state.name} id='name' onChange={this.handleChange} label='Name' placeholder='Qaim Ali' style={{ width: '250px' }} />
                    </Grid>
                    <Grid item style={{}}  ><TextField value={this.state.Email} id='Email' onChange={this.handleChange} label='Email Adress' placeholder='qaimali239@gmail.com' style={{ width: '250px' }} />
                    </Grid>
                    <Grid item style={{}} ><TextField value={this.state.Password} id='Password' onChange={this.handleChange} type='Password' label='Password' style={{ width: '250px' }} />
                    </Grid>
                    <Grid item style={{}}  ><TextField value={this.state.phoneNumber} id='phoneNumber' onChange={this.handleChange} label='Phone Number' id='phoneNumber' value={this.state.phoneNumber} onChange={this.handleChange} placeholder='03011212123' style={{ width: '250px' }} />
                    </Grid>
                    <Grid item style={{ marginLeft: '16%' }}   >
                        <Button variant='contained' color='secondary' onClick={this.UploadImages} >Submit</Button>
                    </Grid>
                </Grid>

            )
        }
    }
    handleChangeSelect = (event, value) => {
        this.setState({ PropertyType: event.target.value })
    };
    handleBack() {
        this.setState({ pro: this.state.pro - 10, progressValue: this.state.progressValue - 30.3334 })

    }
    handleNext() {
        if (this.props.isLogged !== undefined && this.state.pro !== 20 || this.props.isLogged === undefined && this.state.pro !== 30) {
            this.setState({ pro: this.state.pro + 10, progressValue: this.state.progressValue + 30.3334 })
        }
    }
    componentDidMount() {
    }
    render() {

        const { classes } = this.props;
        const { value } = this.state;
        return (
            <MuiThemeProvider>

                <Grid container justify='center' alignItems='center' style={{ marginTop: '8%' }}  >
                    <Grid item><Paper style={{ width: '400px', paddingLeft: '6%', height: '80%', borderRadius: '10px' }}>

                        <Grid container item spacing={16}>
                            <Grid item style={{ marginTop: '10%' }} lg={4}>
                                <Line color='#02bec4' percent={this.state.progressValue} strokeWidth='3' trailWidth='3' strokeColor='#0284a8' style={{ color: '#02bec4', height: '60%' }} />
                            </Grid>
                            {this.handleQuestion()}
                            <Grid item style={{ marginLeft: '2%', marginBottom: '5%' }}>
                                <Button variant='raised' color='secondary' disabled={this.state.pro === 0} onClick={this.handleBack}>Back</Button>
                            </Grid>
                            <Grid item style={{ marginLeft: '50%' }}>
                                <Button variant='raised' color='secondary' disabled={this.state.pro === 30 || this.props.isLogged !== undefined && this.state.pro === 20} onClick={this.handleNext}>Next</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                    </Grid>
                </Grid>
                <Footer />
            </MuiThemeProvider >
        )

    }

}

export default withStyles(styles)(GoogleApiWrapper({
    apiKey: 'AIzaSyDF_eTEi1L1yTfScXvKHr_NghfY_u0NMbg'
})(SellerChild));