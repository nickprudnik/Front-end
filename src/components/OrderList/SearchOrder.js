import React, { Fragment } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";
import moment from "moment";
import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa";
import "./index.scss";
import SeatsChoice from "../../containers/PassengerSeats/index";
import { registerOrder } from "../../redux/search/order/actions";

class SearchOrder extends React.Component {
  static propTypes = {
    selectedFlight: PropTypes.object.isRequired
  };

  handleSubmit = () => {
    const historyOrder = this.props.selectedFlight;
    historyOrder.userId = this.props.userId;
    console.log(historyOrder);
    // const flights = Object.keys(selectedFlight);
    // console.log(flights);

    // const orders = flights.map(flight => ({
    //   userId: this.props.userId,
    //   fromCountry: flight.fromCountry,
    //   toCountry: flight.toCountry,
    //   dateFrom: flight.dateFrom,
    //   dateTo: flight.dateTo,
    //   startTime: flight.startTime,
    //   endTime: flight.endTime,
    //   price: flight.price,
    //   adult: flight.adult
    // }));

    // console.log(orders);
  };

  render() {
    const { selectedFlight } = this.props;
    return (
      <Fragment>
        <section className="order-details__flight">
          <div className="order-details__header">
            <FaCheck className="order-details__icon" />
            <span className="order-details__text">Flight</span>
          </div>

          <div className="passenger_name">
            <span className="passenger_first_name" />
            <span className="passenger_last_name" />
            <span className="passenger_patronymic_name" />
          </div>

          <div>
            <div className="flight-info">
              <span className="flight-info__date">
                {moment(selectedFlight.dateFrom).format("MMM Do")}
              </span>
              <span className="flight-info__date">
                {moment(selectedFlight.dateTo).format("MMM Do")}
              </span>
              <div className="flight-info__wrapper">
                <span className="flight-info__direction">
                  {selectedFlight.fromCountry} - {selectedFlight.toCountry}
                </span>
                <span className="flight-info__time">
                  {selectedFlight.startTime} - {selectedFlight.endTime}
                </span>
              </div>
            </div>
            <div className="about-price">
              <span className="about-price__text">
                {selectedFlight.adult} x Flight ticket
              </span>
              <span className="about-price__amount">
                $ {selectedFlight.price}
              </span>
            </div>
          </div>
        </section>
        <SeatsChoice />
        <button
          type="submit"
          className="button confirm"
          onClick={this.handleSubmit}
        >
          Confirm
        </button>
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  registerOrder
};

const mapStateToProps = state => ({
  selectedFlight: state.user.selectedFlight,
  userId: state.auth.user.id
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SearchOrder);
