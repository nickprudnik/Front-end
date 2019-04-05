import React from "react";
import Typography from "@material-ui/core/Typography";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import FlightLandIcon from "@material-ui/icons/FlightLand";
import "./index.scss";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import moment from "moment";

function FlightsListItems({ classes, flights }) {
  return flights.map(({ id, startTime, endTime, price, dateFrom, dateTo }) => (
    <div key={id} className="flights-list-item">
      <div className="flights-list-item__info">
        <Typography variant="subtitle1" gutterBottom>
          {moment(dateFrom).format("LL")}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {moment(dateTo).format("LL")}
        </Typography>
        <Typography variant="h4" gutterBottom>
          {startTime}
          <FlightTakeoffIcon className={classes.icon} fontSize="large" />
          <FlightLandIcon className={classes.icon} fontSize="large" />
          {endTime}
        </Typography>
      </div>
      <div className="flights-list-item__price">
        <Link to="/select_seats">
          <Button type="button" className="card-buttons">
            $ {price}
          </Button>
        </Link>
      </div>
    </div>
  ));
}

export default FlightsListItems;
