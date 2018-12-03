import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';
import { Button, Grid } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem'
import Details from './Details';
import { Tabs, Tab } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import ImgMediaCard from './rentCard';
import autoPlay from 'react-swipeable-views-utils/lib/autoPlay';
import Maps from './Maps';
const styles = theme => ({
    root: {
        flexGrow: 1,
        height: autoPlay,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    drawerPaper: {
        position: 'relative',
        width: 280,
    },
    textForm: {
        width: 90
    },
    PropertyType: {
        width: 90 * 2
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0, // So the Typography noWrap works
    },
    toolbar: theme.mixins.toolbar,
});

class ClippedDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: 0 }
        this.changePAge = this.changePAge.bind(this);
    }
    changePAge() {
        this.setState({ value: 2 })
    }
    handleChange = (event, value) => {
        this.setState({ value });
    };
    render() {

        const { classes } = this.props;
        const { value } = this.state;
        return (
            <div className={classes.root}>

                <Drawer
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div />
                    <Grid container direction='column' style={{ marginLeft: '4%', marginTop: '4%' }} spacing={16}>
                        <Grid item>
                            <Typography variant='headline'>Search</Typography>
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
                            <Button variant='contained' color='#AA00FF'>Search</Button>
                        </Grid>
                    </Grid>
                </Drawer>
                <main className={classes.content}>
                    <div  >
                        <AppBar position="relative" color="white">
                            <Tabs value={value} indicatorColor="primary" onChange={this.handleChange}>
                                <Tab label="List" />
                                <Tab label="Maps" />
                                <Tab label="Details" />

                            </Tabs>
                            {value == 0 && <ImgMediaCard changePAge={this.changePAge} />}
                            {value == 1 && <Maps />}
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
