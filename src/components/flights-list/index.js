import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import moment from 'moment';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import styles from './material.style';
import { setSelectedFlightInfo, setTotalPrice } from '../../redux/user/actions';

import Search from '../search';

import FlightsListItems from "./flights-list-items";
import "./index.scss";
import { setSelectedFlightInfo } from "../../redux/user/actions";

import ticketsSearchSelector from '../../selectors/ticketsSearchSelector';

class FlightsList extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    userRequest: PropTypes.object.isRequired,
    tickets: PropTypes.array.isRequired,
    setSelectedFlightInfo: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  onClickShowTickets = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  }

  render() {
    const { classes } = this.props;
    const {
      from, to, departure, adult, child, infant,
    } = this.props.userRequest;
    const back = this.props.userRequest.return;

    return (
      <div className="flights-container">
        {from ? (
          <div className="flights-list__header">
            <AppBar className={classes.root} position="fixed" color="default">
              <Toolbar>
                <div className="text-wrapper">
                  <Typography variant="h6" color="inherit">
                    {from} to {to}
                  </Typography>
                  <Typography color="inherit">
                    departure {moment(departure).format('LL')}, {back && `return ${moment(back).format('LL')}`}, {adult && adult !== '0' && `adult ${adult}`} {child && child !== '0' && `child ${child}`} {infant && infant !== '0' && `infant ${infant}`}
                    <button className="change-button" type="button" onClick={this.onclick}>
                    Change
                    </button>
                  </Typography>
                </div>
              </Toolbar>
            </AppBar>

            {this.state.isOpen && <Search />}
          </div>
        )
          : <h1>Please, try to search flights</h1>}

        <List className="flights-list" disablePadding>
          <FlightsListItems classes={classes} flights={this.props.tickets} setTotalPrice={this.props.setTotalPrice} setSelectedFlightInfo={this.props.setSelectedFlightInfo} />
        </List>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userRequest: state.user.request,
  tickets: ticketsSearchSelector(state),
});

const mapDispatchToProps = dispatch => ({
  setTotalPrice: price => dispatch(setTotalPrice(price)),
  setSelectedFlightInfo: flightInfo => dispatch(setSelectedFlightInfo(flightInfo)),
});

const mapDispatchToProps = dispatch => ({
  setSelectedFlightInfo: flightInfo =>
    dispatch(setSelectedFlightInfo(flightInfo))
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(FlightsList);
