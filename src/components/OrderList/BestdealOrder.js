import React, { Fragment } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";
import moment from "moment";
import { FaCheck } from "react-icons/fa";
import "./index.scss";
import SeatsChoice from "../../containers/PassengerSeats/index";

class BestdealOrder extends React.Component {
  render() {
    const { selectedDeal } = this.props;
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
                {moment(selectedDeal.dateFrom).format("MMM Do")}
              </span>
              <span className="flight-info__date">
                {moment(selectedDeal.dateTo).format("MMM Do")}
              </span>
              <div className="flight-info__wrapper">
                <span className="flight-info__direction">
                  {selectedDeal.fromCountry} - {selectedDeal.toCountry}
                </span>
                <span className="flight-info__time">
                  {selectedDeal.startTime} - {selectedDeal.endTime}
                </span>
              </div>
            </div>
            <div className="about-price">
              <span className="about-price__text">
                {selectedDeal.adult} x Flight ticket
              </span>
              <span className="about-price__amount">
                $ {selectedDeal.price}
              </span>
            </div>
          </div>
        </section>
        <SeatsChoice />
        <button type="button" className="button confirm">
          Confirm
        </button>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  selectedDeal: state.user.selectedDeal
});

export default compose(
  withRouter,
  connect(mapStateToProps)
)(BestdealOrder);
