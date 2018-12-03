import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import { withRouter } from 'react-router'
import { Grid, Paper, GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import rootReducer from '../../reducers/index'
import {PictureServer} from '../../server/PictureServer'

import h1 from '../Images/h1.jpeg';
import h2 from '../Images/h2.jpeg';
import h3 from '../Images/h3.jpeg';
import h4 from '../Images/h4.jpeg';
import SellerLogin from './SellerLogin';
const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5,
  },
});

const mapStateToProps = (state) => {//substribe
  return {
    pictures : state.picture_reducer.pictures
  };
};
class TablePaginationActions extends React.Component {
  handleFirstPageButtonClick = event => {
    this.props.onChangePage(event, 0);
  };

  handleBackButtonClick = event => {
    this.props.onChangePage(event, this.props.page - 1);
  };

  handleNextButtonClick = event => {
    this.props.onChangePage(event, this.props.page + 1);
  };

  handleLastPageButtonClick = event => {
    this.props.onChangePage(
      event,
      Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
    );
  };

  render() {
    const { classes, count, page, rowsPerPage, theme } = this.props;

    return (
      <div className={classes.root}>
        <IconButton
          onClick={this.handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="First Page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          aria-label="Previous Page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Next Page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={this.handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Last Page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
}

TablePaginationActions.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired,
};

const TablePaginationActionsWrapped = withStyles(actionsStyles, { withTheme: true })(
  TablePaginationActions,
);

let counter = 0;
function createData(img,houseName,bedroom, properySize, bathrooms,rent) {
  counter += 1;
  return { houseName: houseName,img:img,bedroom: bedroom, properySize:properySize, bathrooms:bathrooms,rent:rent };
}

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});
class SmallPaper extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Paper style={{ marginTop: '3%', marginLeft: '2%' ,width:'95%'}} lg={10} >
                <Grid container style={{ marginLeft: '2%', marginTop: '2%' }} lg={10}>
                    <Grid item style={{ marginTop: '1%', marginBottom: '1%' }} lg={2.9}>
                        <GridList cols='1'>
                            <GridListTile>
                                <img src={this.props.imgC} style={{ width: '220px', }} />
                                <GridListTileBar
                                    title={this.props.rent+'/Month'}
                                />
                            </GridListTile>
                        </GridList>
                    </Grid>
                    <Grid item container direction='column' style={{ marginTop: '5%', marginLeft: '2%' }} spacing={4} lg={7}>
                        <Grid item>
                            <Typography variant="h5" component="h2">
                                <b>{this.props.houseName}</b>
                            </Typography>
                        </Grid>

                        <Grid container item spacing={8} style={{marginLeft:'1%'}}>
                            <Grid item>
                                <Typography variant='title' >
                                    <b>{this.props.bedroom}</b>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography   >
                                    Bedrooms
                            </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item spacing={8} style={{marginLeft:'1%'}}>
                            <Grid item>
                                <Typography variant='title' >
                                    <b>{this.props.bathrooms}</b>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography   >
                                    Bathrooms
                            </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item spacing={8} style={{marginLeft:'1%'}}>
                            <Grid item>
                                <Typography variant='title' >
                                    <b>{this.props.properySize}</b>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography   >
                                    Marla
                            </Typography>
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid item style={{ marginTop: '10%' }} lg={1}>
                        <Button color='secondary' size='large' variant='contained' onClick={this.props.changePAge}>Details</Button>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
};

SmallPaper.propTypes = {
    classes: PropTypes.object.isRequired,
};

class ImgMediaCard extends React.Component {
  state = {
    rows: this.props.properties,
    page: 0,
    rowsPerPage: 5,
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };
  componentWillReceiveProps(itemProps){
    this.setState({rows:itemProps.rows})
  }
  componentDidMount(){
    
  }

  render() {
    const { classes } = this.props;
    const { rows, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}style={{width:'97%',marginLeft:'2%',marginBottom:'2%'}} > 
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                return (
                    <SmallPaper cardProps={classes.card} imgC={row.MainImage} houseName={row.Address} properySize={'5'} bedroom={row.Bedrooms} changePAge={this.props.changePAge} bathrooms={row.Bathrooms} rent={row.rent} />
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActionsWrapped}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </Paper>
    );
  }
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard) ; withRouter(connect(mapStateToProps)(ImgMediaCard));
