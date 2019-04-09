import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import moment from "moment";
import { FaCheck } from "react-icons/fa";
import "./index.scss";
import ticketsSearchSelector from "../../selectors/ticketsSearchSelector";

class OrderDetails extends React.Component {
  static propTypes = {
    tickets: PropTypes.array.isRequired
  };

  render() {
    const { tickets } = this.props;
    const { bookedSeats } = this.props;

    return (
      <section className="order-details">
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
          {tickets.map(
            ({
              id,
              startTime,
              endTime,
              price,
              dateFrom,
              dateTo,
              fromCountry,
              toCountry
            }) => (
              <div key={id}>
                <div className="flight-info">
                  <span className="flight-info__date">
                    {moment(dateFrom).format("MMM Do")}
                  </span>
                  <span className="flight-info__date">
                    {moment(dateTo).format("MMM Do")}
                  </span>
                  <div className="flight-info__wrapper">
                    <span className="flight-info__direction">
                      {fromCountry} - {toCountry}
                    </span>
                    <span className="flight-info__time">
                      {startTime} - {endTime}
                    </span>
                  </div>
                  <div className="select_seats">
                    {bookedSeats.map(res => (
                      <span className="flight-info_seats">{res}</span>
                    ))}
                  </div>
                </div>
                <div className="about-price">
                  <span className="about-price__text">{1} x Flight ticket</span>
                  <span className="about-price__amount">$ {price}</span>
                </div>
              </div>
            )
          )}
        </section>
        <button type="button" className="button confirm">
          Confirm
        </button>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  tickets: ticketsSearchSelector(state)
});

export default compose(
  withRouter,
  connect(mapStateToProps)
)(OrderDetails);
