import React, { Fragment } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "./material.style";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";

import Search from "../search";

import FlightsListItems from "./flights-list-items";
import "./index.scss";

import ticketsSearchSelector from "../../selectors/ticketsSearchSelector";

class FlightsList extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    userRequest: PropTypes.object.isRequired,
    tickets: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  onClickShowTickets = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };

  render() {
    const { classes } = this.props;
    const { to } = this.props.userRequest;

    return (
      <div className="flights-container">
        {to ? (
          <Fragment>
            <FlightsListItems
              classes={classes}
              flights={this.props.tickets}
              setTotalPrice={this.props.setTotalPrice}
              setSelectedFlightInfo={this.props.setSelectedFlightInfo}
            />

            {this.state.isOpen && <Search />}
          </Fragment>
        ) : (
          <h1>
            Please, try to search flights
            <FlightTakeoffIcon className={classes.icon} fontSize="large" />
          </h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userRequest: state.user.request,
  tickets: ticketsSearchSelector(state)
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(FlightsList);
