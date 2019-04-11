import React from "react";
import "./index.scss";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FaPlane } from "react-icons/fa";
import moment from "moment";
import Typography from "@material-ui/core/Typography";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import FlightLandIcon from "@material-ui/icons/FlightLand";

function FlightsListItems({ flights, classes, setSelectedFlightInfo }) {
  const setInfo = flightInfo => {
    setSelectedFlightInfo(flightInfo);
  };

  return flights.map(
    ({
      id,
      startTime,
      endTime,
      price,
      dateFrom,
      dateTo,
      fromCountry,
      toCountry,
      adult
    }) => (
      <div key={id} className="flights-list-item">
        <div className="full_flight_info">
          <Typography variant="h6" color="inherit">
            {fromCountry} to {toCountry}
          </Typography>
          <Typography color="inherit">
            Departure {moment(dateFrom).format("LL")},{" "}
            {dateTo && `return ${moment(dateTo).format("LL")}`},{" "}
            {adult && adult !== "0" && `adult ${adult}`}{" "}
          </Typography>
        </div>
        <div className="info_price">
          <div className="flights-list-item__info">
            <div className="info-wrapper">
              <div className="flight">
                <FlightTakeoffIcon className={classes.icon} fontSize="large" />
                <span className="flight__time">{startTime}</span>
              </div>
              <FaPlane className="fa-arrow" />
              <div className="flight">
                <FlightLandIcon className={classes.icon} fontSize="large" />
                <span className="flight__time">{endTime}</span>
              </div>
            </div>
          </div>
          <div className="flights-list-item__price">
            <Link to="/passenger_list">
              <Button
                type="button"
                className="card-buttons price"
                onClick={() =>
                  setInfo(price, {
                    id,
                    startTime,
                    endTime,
                    price
                  })
                }
              >
                $ {price}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  );
}

export default FlightsListItems;
