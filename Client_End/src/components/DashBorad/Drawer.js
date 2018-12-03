import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Details from './Details';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import List from '@material-ui/icons/List';
import MenuIcon from '@material-ui/icons/Menu';
import { Tabs, Tab, TextField, MenuItem, Select, Grid, Button } from '@material-ui/core';

import ImgMediaCard from './rentCard';
import MapsParent from './Maps';

const drawerWidth = 300;

const styles = theme => ({
    root: {
        flexGrow: 1,
        zIndex: 1,
        height: 'auto',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    appBar: {
        position: 'absolute',
        marginLeft: drawerWidth,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        height: 1000,
        width: 290,
        [theme.breakpoints.up('md')]: {
            position: 'relative',
        },
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
    textForm: {
        width: 90
    },
    PropertyType: {
        width: 90 * 2
    },
});

class ClippedDrawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileOpen: false, value: 0, PropertyType: '', Size: ''
        };
        this.handleSelect = this.handleSelect.bind(this);
        this.changePAge = this.changePAge.bind(this);
    }

    handleSelect = name => event => {
        this.setState({ [name]: event.target.value });
    };

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };
    changePAge() {
        this.setState({ value: 2 })
    }
    handleChange = (event, value) => {
        this.setState({ value });
    };
componentDidMount (){
    
    
}
    render() {
        const { classes, theme } = this.props;

        const { value } = this.state;



        return (
            <div className={classes.root}>

                <Hidden mdUp>
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={this.state.mobileOpen}
                        onClose={this.handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        <Grid container direction='column' style={{ marginLeft: '4%', marginTop: '4%' }} spacing={16}>
                            <Grid item style={{ backgroundColor: '#02bec4' }}>
                                <Typography variant='headline' style={{ color: 'white' }}>Search</Typography>
                            </Grid>
                            <Grid item >
                                <Typography><b>Location</b></Typography>
                            </Grid>
                            <Grid item>
                                <TextField
                                    label="Area/City/Province"
                                    placeholder="Area/City/Province"
                                    className={classes.textFieldForm}
                                />
                            </Grid>
                            <Grid item >
                                <Typography><b>Price</b></Typography>
                            </Grid>
                            <Grid container item>
                                <Grid item>
                                    <TextField
                                        placeholder="Min Price"
                                        label="Min Price"
                                        className={classes.textForm}
                                    />
                                    - <TextField
                                        placeholder="Max Price"
                                        label="Max Price"
                                        className={classes.textForm}
                                    />
                                </Grid>
                            </Grid>

                            <Grid item >
                                <Typography><b>Select Property Type</b></Typography>
                                <Select className={classes.PropertyType}
                                    placeholder="Property Type"
                                    label="Property Type"
                                    value={this.state.PropertyType}
                                    onChange={this.handleSelect('PropertyType')}
                                >

                                    <MenuItem value={10}>House</MenuItem>
                                    <MenuItem value={20}>Apartment</MenuItem>
                                    <MenuItem value={30}>Bussiness Commercial</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item spacing={16}>
                                <Typography>
                                    <b>Size</b>
                                </Typography>
                                <Select className={classes.PropertyType}
                                    placeholder="Size"
                                    label="Size"
                                    value={this.state.Size}
                                    onChange={this.handleSelect('Size')}
                                >

                                    <MenuItem value={10}>Marla</MenuItem>
                                    <MenuItem value={20}>Sq Feet</MenuItem>
                                </Select>

                            </Grid>
                            <Grid container item>
                                <Grid item>
                                    <TextField
                                        placeholder="Min Marla"
                                        label="Min Marla"
                                        className={classes.textForm}
                                    />
                                    - <TextField
                                        placeholder="Max Marla"
                                        label="Max Marla"
                                        className={classes.textForm}
                                    />
                                </Grid>
                            </Grid>
                            <Grid>
                                <Button variant='contained' color='secondary'>Search</Button>
                            </Grid>
                        </Grid>

                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer
                        variant="permanent"
                        open
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <Grid container direction='column' style={{ marginLeft: '4%', marginTop: '4%' }} lg={11} spacing={16}>

                            <Grid item style={{ backgroundColor: '#02bec4' }}>
                                <Typography variant='headline' style={{ color: 'white' }}>Search</Typography>
                            </Grid>


                            <Grid item >
                                <Typography><b>Location</b></Typography>
                            </Grid>
                            <Grid item>
                                <TextField
                                    label="Area/City/Province"
                                    placeholder="Area/City/Province"
                                    className={classes.textFieldForm}
                                />
                            </Grid>
                            <Grid item >
                                <Typography><b>Price</b></Typography>
                            </Grid>
                            <Grid container item>
                                <Grid item>
                                    <TextField
                                        placeholder="Min Price"
                                        label="Min Price"
                                        className={classes.textForm}
                                    />
                                    - <TextField
                                        placeholder="Max Price"
                                        label="Max Price"
                                        className={classes.textForm}
                                    />
                                </Grid>
                            </Grid>

                            <Grid item >
                                <Typography><b>Select Property Type</b></Typography>
                                <Select className={classes.PropertyType}
                                    placeholder="Property Type"
                                    label="Property Type"
                                    value={this.state.PropertyType}
                                    onChange={this.handleSelect('PropertyType')}
                                >

                                    <MenuItem value={10}>House</MenuItem>
                                    <MenuItem value={20}>Apartment</MenuItem>
                                    <MenuItem value={30}>Bussiness Commercial</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item spacing={16}>
                                <Typography>
                                    <b>Size</b>
                                </Typography>
                                <Select className={classes.PropertyType}
                                    placeholder="Size"
                                    label="Size"
                                    value={this.state.Size}
                                    onChange={this.handleSelect('Size')}
                                >

                                    <MenuItem value={10}>Marla</MenuItem>
                                    <MenuItem value={20}>Sq Feet</MenuItem>
                                </Select>

                            </Grid>
                            <Grid container item>
                                <Grid item>
                                    <TextField
                                        placeholder="Min Marla"
                                        label="Min Marla"
                                        className={classes.textForm}
                                    />
                                    - <TextField
                                        placeholder="Max Marla"
                                        label="Max Marla"
                                        className={classes.textForm}
                                    />
                                </Grid>
                            </Grid>
                            <Grid>
                                <Button variant='contained' color='secondary'>Search</Button>
                            </Grid>
                        </Grid>

                    </Drawer>
                </Hidden>
                <main className={classes.content}>
                    <div  >
                        <AppBar position="relative" color="white">
                            <Grid container >
                                <Grid item>
                                    <IconButton
                                        color="inherit"
                                        aria-label="Open drawer"
                                        onClick={this.handleDrawerToggle}
                                        className={classes.navIconHide}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item style={{ marginTop: '2%' }}>
                                    <Typography variant='title' className={classes.navIconHide} >Search</Typography>
                                </Grid>
                            </Grid>
                            <Tabs value={value} indicatorColor="secondary" onChange={this.handleChange}>
                                <Tab icon={<List />} />
                                <Tab icon={<LocationOnIcon />} />
                                <Tab icon={<img src={require('../Images/details.png')} color='secondary' style={{ width: '20px', height: '20px' }} />} />
                            </Tabs>
                            {value == 0 && <ImgMediaCard  properties={this.props.properties} changePAge={this.changePAge} images = {this.props.images}/>}
                            {value == 1 && <MapsParent
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `200px` }} />}
                                mapElement={<div style={{ height: `100%` }} />} />}
                            {value == 2 && <Details />}
                        </AppBar>
                    </div>
                </main>
            </div>
        );
    }
}

ClippedDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ClippedDrawer);
