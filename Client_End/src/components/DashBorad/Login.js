import React from 'react';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Typography, AppBar, GridList, Toolbar, GridListTile, GridListTileBar, TextField, Button } from '@material-ui/core';
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
class LoginChild extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeStep: 0, name: '', pass: ''
        };
        this.handleLoginLocal = this.handleLoginLocal.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    handleLoginLocal() {
        this.props.accounts.map((val) => {
            if (this.state.name === val.name && this.state.pass == val.password) {
                this.props.handleOwnerId(val._id)
            }
        }

        )
    }
    render() {
        const { classes } = this.props;
        return (
            <Grid lg={10}>
                <Grid item>
                    <AppBar position="absolute">
                        <Toolbar>
                            <img src={require('../Images/logoK2.gif')} style={{ width: '70px', height: '60px' }} className={classes.menuButton} color="inherit" aria-label="Menu" />

                            <Typography variant="headline" style={{ marginLeft: '2%' }} color="inherit" className={classes.grow}>
                                Rent Inn
                            </Typography>
                            <Button variant='raised' color='secondary' onClick={this.props.handleHome} >Home</Button>
                        </Toolbar>
                    </AppBar>
                </Grid>
                <Grid container direction='column' justify='center' style={{ marginTop: '15%', marginLeft: '5%' }} alignItems='center' spacing={16}>

                    <Grid item>
                        <TextField id='name' onChange={this.handleChange} label='Email' placeholder='qaim' />

                    </Grid>
                    <Grid item>
                        <TextField id='pass' onChange={this.handleChange} label='Password' placeholder='6666' />

                    </Grid>
                    <Grid item>
                        <Button onClick={this.handleLoginLocal} color='secondary' variant='raised'>Login</Button>

                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

LoginChild.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginChild);
