import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import moment from 'moment';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import styles from './material.style';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import { setSelectedFlightInfo, setTotalPrice } from '../../redux/user/actions';

import Search from '../search';

import FlightsListItems from './flights-list-items';
import './index.scss';

import ticketsSearchSelector from '../../selectors/ticketsSearchSelector';

class FlightsList extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    userRequest: PropTypes.object.isRequired,
    tickets: PropTypes.array.isRequired,
    setTotalPrice: PropTypes.func.isRequired,
    setSelectedFlightInfo: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  onclick = () => {
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
        {to ? (
          <div className="flights-list__header">
            <List className="flights-list" disablePadding>
              <div className="text-wrapper">
                  <Typography variant="h6" color="inherit">
                    {from} to {to}
                  </Typography>
                  <Typography color="inherit">
                    Departure {moment(departure).format('LL')}, {back && `return ${moment(back).format('LL')}`}, {adult && adult !== '0' && `adult ${adult}`} {child && child !== '0' && `child ${child}`} {infant && infant !== '0' && `infant ${infant}`}
                  </Typography>
                </div>
          <FlightsListItems classes={classes} flights={this.props.tickets} setTotalPrice={this.props.setTotalPrice} setSelectedFlightInfo={this.props.setSelectedFlightInfo} />
            </List>
              {this.state.isOpen && <Search />}
            </div>
        )
          : <h1>Please, try to search flights<FlightTakeoffIcon className={classes.icon} fontSize="large" /></h1>}
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

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(FlightsList);