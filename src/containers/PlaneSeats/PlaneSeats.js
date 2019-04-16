import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { planeFetchData } from "../../redux/search/planeShema/actions";
import { setPassengersInfo } from "../../redux/user/actions";

import Rows from "./Rows";

import "./index.scss";
import OrderDetails from "../../components/OrderList/OrderList";
import EnableSeats from "./EnableSeats";

class PlaneSeats extends Component {
  static propTypes = {
    planeFetchData: PropTypes.func.isRequired,
    plane: PropTypes.array.isRequired,
    passengersInfo: PropTypes.array.isRequired,
    setInfo: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.planeFetchData();
  }

  bookSeat = e => {
    const { id } = e.target;

    const newInfo = this.props.passengersInfo.map((passenger, index) => {
      if (index === this.props.selectedPassenger) {
        return { ...passenger, selectedSeat: id };
      }
      return passenger;
    });

    this.props.setInfo(newInfo);
  };

  render() {
    const rows = [];
    for (let i = 0; i < this.props.plane.rows; i++) {
      rows.push(
        <Rows
          className={"row"}
          startingLetter={i * 3 + 65}
          subRows={this.props.plane.subRows}
          seats={this.props.plane.seats}
          onClick={this.bookSeat}
        />
      );
    }
    return (
      <Fragment>
        <div className="reserved_main_page">
          <div className="plane_seats_svg">
            <div className="plane">
              <div className="cockpit">
                <h1>Please select seats</h1>
              </div>
              <div className="exit exit--front fuselage" />
              <div className="cabin fuselage" onClick={this.bookSeat}>
                {rows}
              </div>
              <div className="exit exit--front fuselage" />
            </div>
            <EnableSeats />
          </div>
          <div className="tickets_info">
            <OrderDetails />
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  plane: state.searchPage.plane.items,
  planeHasErrored: state.searchPage.plane.hasErrored,
  planeIsLoading: state.searchPage.plane.isLoading,
  passengersInfo: state.user.passengersInfo,
  selectedPassenger: state.user.selectedPassenger
});

const mapDispatchToProps = dispatch => ({
  planeFetchData: values => dispatch(planeFetchData(values)),
  setInfo: info => dispatch(setPassengersInfo(info))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PlaneSeats)
);
