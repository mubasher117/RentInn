import React from "react";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import {
  Tabs,
  Tab,
  Select,
  MenuItem,
  Switch,
  Toolbar,
  Divider,
  AppBar,
  Button,
  Typography,
  TextField,
  FormControlLabel,
  Paper,
} from "@material-ui/core";

import { linkSync } from "fs";
import h2 from "../Images/h2.jpeg";
import Footer from "./footer.js";
import {
  Map,
  InfoWindow,
  Marker,
  DirectionsRenderer,
  GoogleApiWrapper,
} from "google-maps-react";
import IntegrationReactSelect from "./suggestion";
import axios from "axios";
import CancelIcon from "@material-ui/icons/Cancel";
import { emphasize } from "@material-ui/core/styles/colorManipulator";
import Chip from "@material-ui/core/Chip";
import NoSsr from "@material-ui/core/NoSsr";
import firebase from "@firebase/app";
import "@firebase/firestore";
import "@firebase/storage";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

var config = {
  projectId: "rentinn-2018",
  storageBucket: "rentinn-2018.appspot.com",
};
firebase.initializeApp(config);
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#e3f2fd",
    },
    secondary: {
      main: "#fce4ec",
    },
  },
});

const styles = {
  root: {
    top: "20%",
    left: "30%",
    paddingTop: "70px",
  },

  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  card: {
    minWidth: 175,
    width: 300,
    color: "black",
    paddingLeft: "50px",
  },
  imgRoot: {
    display: "flex",
    justifyContent: "left",
    marginLeft: "100px",
  },
  icon: {
    color: "#6A1B9A",
  },
  fontC: {
    font: "Arial Bold",
  },
  pap: {
    zIndex: -1,
    height: 55,
  },
  img: {
    width: "100%",
    height: "75%",
    backgroundSize: "cover",
    backkgroundRepeat: "no-repeat",
    paddingBottom: "3%",
  },
  textColor: {
    color: "white",
  },
  button: {
    margin: theme.spacing.unit,
  },
  progressBarS: {
    paddingLeft: "300px",
    width: "600px",
    height: "50px",
  },
  valueContainer: {
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    alignItems: "center",
    overflow: "hidden",
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === "light"
        ? theme.palette.grey[300]
        : theme.palette.grey[700],
      0.08
    ),
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  singleValue: {
    fontSize: 16,
  },
  placeholder: {
    position: "absolute",
    left: 2,
    fontSize: 16,
  },
  paper: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  divider: {
    height: theme.spacing.unit * 2,
  },
};
const mapStyles = {
  width: "380px",
  height: "300px",
};
const punjabSugestions = [
  { label: "Taxila" },
  { label: "Sialkot" },
  { label: "Sargodha" },
  { label: "Sahiwal" },
  { label: "Rahim Yar Khan" },
  { label: "Rawalpindi" },
  { label: "Pattoki" },
  { label: "Okara" },
  { label: "Narowal" },
  { label: "Murree" },
  { label: "Multan" },
  { label: "Mianwali" },
  { label: "Mandi Bahauddin" },
  { label: "Mailsi" },
  { label: "Layyah" },
  { label: "Lahore" },
  { label: "Kot Adu" },
  { label: "Khushab" },
  { label: "Khanpur" },
  { label: "Khanewal" },
  { label: "Kalabagh" },
  { label: "Gujrat" },
  { label: "Gujranwala" },
  { label: "Faisalabad" },
  { label: "Dera Ghazi Khan" },
  { label: "Chakwal" },
  { label: "Bhakkar" },
  { label: "Bahawalpur" },
  { label: "Bahawalnagar" },
  { label: "Attock" },
  { label: "Arifwala" },
  { label: "Alipur" },
  { label: "Raiwind" },
].map((suggestion) => ({
  value: suggestion.label,
  label: suggestion.label,
}));
class SellerChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progressValue: 0,
      lat: "",
      lng: "",
      file: h2,
      activeStep: 0,
      showingInfoWindow: false, //Hides or the shows the infoWindow
      activeMarker: {}, //Shows the active marker upon click
      selectedPlace: {},
      fullAddres: "",
      cities: [],
      address: "",
      pro: 0,
      bahtrooms: 0,
      garage: false,
      ac: false,
      Bedroooms: 0,
      PropertyType: "",
      imageP: "",
      phoneNumber: "",
      name: "",
      Password: "",
      Email: "",
      rent: "",
      imageFile: [],
      url: "",
      size: "",
      city: "",
      province: "",
    };
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
    this.handleAddress = this.handleAddress.bind(this);
  }
  handleAddress = (name) => (value) => {
    this.setState({ [name]: value.target.value });
    if (name === "province") {
      if (value.target.value === "Punjab") {
        this.setState({ cities: punjabSugestions });
      } else {
        this.setState({ cities: [] });
      }
    }
  };
  firebaseReuest = (image) => {
    const fd = new FormData();
    fd.append("image", image, image.name);
    console.log(fd);
    axios
      .post(
        "https://us-central1-rentinn-2018.cloudfunctions.net/testFunction",
        fd,
        {}
      )
      .then((res) => {
        console.log(res);
        const storage = firebase.storage();
        storage
          .ref(image.name)
          .getDownloadURL()
          .then((imageurl) => {
            this.setState({ url: imageurl });
            console.log(this.state.url);
            this.handleSubmit();
          });
      });
  };
  UploadImages = () => {
    for (var i = 0; i < this.state.imageFile.length; ++i) {
      this.firebaseReuest(this.state.imageFile.item(i));
    }
  };
  setFile = (event) => {
    if (event.target.files[0] == null || event.target.files[0] == undefined) {
      this.setState({ file: h2 });
    } else {
      this.setState({
        imageFile: event.target.files,
        file: URL.createObjectURL(event.target.files[0]),
      });
    }
  };
  handlePicture(event) {
    this.setState({ file: URL.createObjectURL(event.target.files[0]) });
  }
  handleSubmit() {
    if (this.props.isLogged !== undefined) {
      this.props.handleProperty(
        this.state.lat,
        this.state.lng,
        this.state.fullAddres,
        this.state.PropertyType,
        this.state.Bedroooms,
        this.state.bahtrooms,
        this.state.garage,
        this.state.ac,
        this.state.name,
        this.state.Password,
        this.state.Email,
        this.state.phoneNumber,
        this.state.rent,
        true,
        this.state.url,
        this.state.size,
        this.state.province,
        this.state.city
      );
    } else {
      this.props.handleProperty(
        this.state.lat,
        this.state.lng,
        this.state.fullAddres,
        this.state.PropertyType,
        this.state.Bedroooms,
        this.state.bahtrooms,
        this.state.garage,
        this.state.ac,
        this.state.name,
        this.state.Password,
        this.state.Email,
        this.state.phoneNumber,
        this.state.rent,
        false,
        this.state.url,
        this.state.size,
        this.state.province,
        this.state.city
      );
    }
  }
  handleSuggestions() {}
  handleChange(event) {
    if (event.target.id !== "ac" && event.target.id != "garage") {
      this.setState({ [event.target.id]: event.target.value });
    }
    if (event.target.id == "ac") {
      this.setState({ ac: event.target.checked });
    }
    if (event.target.id == "garage") {
      this.setState({ garage: event.target.checked });
    }
  }
  handleDrag(latP) {
    const lat = latP.latLng.lat();
    const lng = latP.latLng.lng();
    this.setState({ lat: lat, lng: lng });
  }
  handleChangeMap = (address) => {
    this.setState({ address });
  };

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) =>
        this.setState({ lat: { lat, lng }.lat, lng: { lat, lng }.lng })
      );
  };
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
    console.log(props);
  };
  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  loggedUser() {
    if (this.props.isLogged !== undefined) {
      return (
        <Button
          color="secondary"
          style={{
            marginLeft: "33%",
            marginBottom: "1%",
            minHeight: "40px",
            minWidth: "100px",
          }}
          variant="contained"
          onClick={this.handleSubmit}
        >
          Submit
        </Button>
      );
    }
  }
  handleQuestion() {
    if (this.state.pro === 0) {
      return (
        <Grid container direction="column" spacing={8} item style={{}}>
          <Grid item style={{ marginBottom: "3%", color: "black" }}>
            <Typography variant="display1">Property Information</Typography>
          </Grid>
          <Grid item style={{}}>
            <Typography
              variant="subheading"
              style={{ fontFamily: '"Titillium Web",sans-serif' }}
              variant="subheading"
            >
              What kind of place are you want to Rent?
            </Typography>
          </Grid>
          <Grid item style={{}}>
            <Select
              required
              style={{ width: "100%" }}
              id="PropertyType"
              value={this.state.PropertyType}
              onChange={this.handleChangeSelect}
            >
              <MenuItem value={"House"}>House</MenuItem>
              <MenuItem value={"Apartment"}>Apartment</MenuItem>
              <MenuItem value={"Bussiness Commercial"}>
                Bussiness Commercial
              </MenuItem>
            </Select>
          </Grid>
          <Grid container item style={{}}>
            <Grid container item spacing={8} style={{ marginTop: "1%" }} lg={8}>
              <Grid item>
                <Typography
                  variant="subheading"
                  style={{ fontFamily: '"Titillium Web",sans-serif' }}
                  variant="subheading"
                >
                  Area
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="subheading"
                  style={{
                    fontFamily: '"Titillium Web",sans-serif',
                    marginTop: "10%",
                  }}
                  variant="caption"
                >
                  (in Marla)
                </Typography>
              </Grid>
            </Grid>
            <Grid item style={{}} lg={4}>
              <TextField
                value={this.state.size}
                type="number"
                id="size"
                onChange={this.handleChange}
                style={{ width: "80px", margin: "0px 0px 0px 10px" }}
              />
            </Grid>
          </Grid>
          <Grid container item>
            <Grid item style={{ marginTop: "1%" }} lg={8}>
              <Typography
                variant="subheading"
                style={{ fontFamily: '"Titillium Web",sans-serif' }}
                variant="subheading"
              >
                Is Garage Available?
              </Typography>
            </Grid>
            <Grid item style={{ paddingLeft: "28px" }} lg={4}>
              <Switch
                checked={this.state.garage}
                id="garage"
                onChange={this.handleChange}
              />
            </Grid>
          </Grid>
          <Grid container item style={{}}>
            <Grid item style={{ marginTop: "1%" }} lg={8}>
              <Typography
                variant="subheading"
                style={{ fontFamily: '"Titillium Web",sans-serif' }}
              >
                Is AC Available?
              </Typography>
            </Grid>
            <Grid item style={{ paddingLeft: "28px" }} lg={4}>
              <Switch
                checked={this.state.ac}
                id="ac"
                onChange={this.handleChange}
              />
            </Grid>
          </Grid>
          <Grid container item style={{}}>
            <Grid item style={{ marginTop: "1%" }} lg={8}>
              <Typography
                variant="subheading"
                style={{ fontFamily: '"Titillium Web",sans-serif' }}
              >
                Property Rent
              </Typography>
            </Grid>

            <Grid item lg={2}>
              <TextField
                placeholder="Per Month"
                value={this.state.rent}
                id="rent"
                style={{ width: "80px" }}
                onChange={this.handleChange}
              />
            </Grid>
          </Grid>
          <Grid container item style={{}}>
            <Grid item style={{ marginTop: "1%" }} lg={8}>
              <Typography
                variant="subheading"
                style={{ fontFamily: '"Titillium Web",sans-serif' }}
                variant="subheading"
              >
                How many Bedroooms?
              </Typography>
            </Grid>
            <Grid item style={{}} lg={4}>
              <TextField
                value={this.state.Bedroooms}
                id="Bedroooms"
                onChange={this.handleChange}
                type="number"
                style={{ width: "80px" }}
              />
            </Grid>
          </Grid>
          <Grid container item style={{}}>
            <Grid item style={{ marginTop: "1%" }} lg={8}>
              <Typography
                variant="subheading"
                style={{ fontFamily: '"Titillium Web",sans-serif' }}
                variant="subheading"
              >
                How many Bathrooms?
              </Typography>
            </Grid>
            <Grid item style={{}} lg={4}>
              <TextField
                value={this.state.bahtrooms}
                id="bahtrooms"
                onChange={this.handleChange}
                type="number"
                style={{ width: "80px" }}
              />
            </Grid>
          </Grid>
        </Grid>
      );
    } else if (this.state.pro === 10) {
      return (
        <Grid
          container
          direction="column"
          xs={12}
          item
          style={{ height: "537px" }}
        >
          <Grid item style={{ marginBottom: "3%", color: "black" }}>
            <Typography variant="display1">Property Information</Typography>
          </Grid>
          <Grid item style={{}}>
            <Select
              required
              style={{ width: "100%" }}
              id="province"
              value={this.state.province}
              onChange={this.handleAddress("province")}
            >
              <MenuItem value={"Punjab"}>Punjab</MenuItem>
              <MenuItem value={"Khaber Pakhton Khawa"}>
                Khyber Pakhtunkhwa
              </MenuItem>
              <MenuItem value={"Sindh"}>Sindh</MenuItem>
              <MenuItem value={"Balchistan"}>Balochistan</MenuItem>
            </Select>
          </Grid>
          <Grid item style={{}}>
            <Select
              required
              style={{ width: "100%" }}
              id="city"
              value={this.state.city}
              onChange={this.handleAddress("city")}
            >
              {this.state.cities.map((val) => {
                return <MenuItem value={val.label}>{val.label}</MenuItem>;
              })}
            </Select>
          </Grid>
          <Grid item style={{}}>
            <PlacesAutocomplete
              value={this.state.address}
              onChange={this.handleChangeMap}
              onSelect={this.handleSelect}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }) => (
                <div>
                  <TextField
                    {...getInputProps({
                      placeholder: "Search Property",
                      className: "location-search-input",
                    })}
                    style={{ width: "100%" }}
                  />
                  <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map((suggestion) => {
                      const className = suggestion.active
                        ? "suggestion-item--active"
                        : "suggestion-item";
                      // inline style for demonstration purpose
                      const style = suggestion.active
                        ? { backgroundColor: "#fafafa", cursor: "pointer" }
                        : { backgroundColor: "#ffffff", cursor: "pointer" };
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
              style={{
                  width: this.container.offsetWidth,
                  height: 250
              }}
              center={
                new this.props.google.maps.LatLng(
                  this.state.lat,
                  this.state.lng
                )
              }
              onChildMouseMove={() => console.log("move")}
            >
              <Marker
                onClick={this.onMarkerClick}
                onDragend={(t, map, coord) => this.handleDrag(coord)}
                name={this.state.selectedPlace.name}
                draggable={true}
                position={{
                  lat: this.state.lat,
                  lng: this.state.lng,
                }}
                onMouseDown={() => {
                  console.log("say hello");
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
      );
    } else if (this.state.pro === 20) {
      return (
        <Grid container direction="column" spacing={16} item style={{}}>
          <Grid
            item
            style={{ marginLeft: "6%", marginBottom: "3%", color: "black" }}
          >
            <Typography variant="display1">Property Information</Typography>
          </Grid>

          <Grid item style={{}}>
            <TextField
              value={this.state.fullAddres}
              id="fullAddres"
              onChange={this.handleChange}
              label="Title Of your Property"
              placeholder="5 Marla at Gulshan e Ravi, Lahore Pakistan"
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item style={{}}>
            <TextField
              type="file"
              id="fullAddres"
              onChange={this.setFile}
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item style={{}}>
            <img
              src={this.state.file}
              style={{ width: "100%", height: "220px" }}
            />
          </Grid>
          <Grid item style={{ align: "center" }}>
            {this.loggedUser()}
          </Grid>
        </Grid>
      );
    } else if (this.state.pro === 30 && this.props.isLogged === undefined) {
      return (
        <Grid container direction="column" spacing={16} item style={{}}>
          <Grid
            item
            style={{ marginLeft: "6%", marginBottom: "3%", color: "black" }}
          >
            <Typography variant="display1">Personal Information</Typography>
          </Grid>

          <Grid item style={{}}>
            <TextField
              value={this.state.name}
              id="name"
              onChange={this.handleChange}
              label="Name"
              placeholder="Qaim Ali"
              style={{ width: "250px" }}
            />
          </Grid>
          <Grid item style={{}}>
            <TextField
              value={this.state.Email}
              id="Email"
              onChange={this.handleChange}
              label="Email Adress"
              placeholder="qaimali239@gmail.com"
              style={{ width: "250px" }}
            />
          </Grid>
          <Grid item style={{}}>
            <TextField
              value={this.state.Password}
              id="Password"
              onChange={this.handleChange}
              type="Password"
              label="Password"
              style={{ width: "250px" }}
            />
          </Grid>
          <Grid item style={{}}>
            <TextField
              value={this.state.phoneNumber}
              id="phoneNumber"
              onChange={this.handleChange}
              label="Phone Number"
              id="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleChange}
              placeholder="03011212123"
              style={{ width: "250px" }}
            />
          </Grid>
          <Grid item style={{ marginLeft: "16%", textAlign: "right" }}>
            <Button
              variant="contained"
              color="secondary"
              style={{ marginRight: "150px" }}
              onClick={this.UploadImages}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      );
    }
  }
  handleChangeSelect = (event, value) => {
    this.setState({ PropertyType: event.target.value });
  };
  handleBack() {
    this.setState({
      pro: this.state.pro - 10,
      progressValue: this.state.progressValue - 30.3334,
    });
  }
  handleNext() {
    if (
      (this.props.isLogged !== undefined && this.state.pro !== 20) ||
      (this.props.isLogged === undefined && this.state.pro !== 30)
    ) {
      this.setState({
        pro: this.state.pro + 10,
        progressValue: this.state.progressValue + 30.3334,
      });
    }
  }
  componentDidMount() {}
  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <MuiThemeProvider>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ marginTop: "8%" }}
        >
          <Paper
            style={{
              //   width: "400px",
              //   height: "80%",
              borderRadius: "10px",
              padding: "4%",
            }}
          >
              <div
              
          ref = {cref => this.container = cref}
          style={{width: '100%'}}></div>
            {this.handleQuestion()}
            <Grid
              item
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "5%",
              }}
            >
              <Button
                variant="raised"
                color="secondary"
                disabled={this.state.pro === 0}
                onClick={this.handleBack}
              >
                Back
              </Button>
              <Button
                variant="raised"
                color="secondary"
                disabled={
                  this.state.pro === 30 ||
                  (this.props.isLogged !== undefined && this.state.pro === 20)
                }
                onClick={this.handleNext}
              >
                Next
              </Button>
            </Grid>
          </Paper>
        </Grid>
        <Footer />
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(
  GoogleApiWrapper({
    apiKey: "AIzaSyDF_eTEi1L1yTfScXvKHr_NghfY_u0NMbg",
  })(SellerChild)
);
