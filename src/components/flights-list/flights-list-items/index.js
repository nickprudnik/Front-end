import React from 'react';
import Typography from '@material-ui/core/Typography';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import FlightLandIcon from '@material-ui/icons/FlightLand';
import './index.scss';

function FlightsListItems({
  classes, flights, setTotalPrice, setSelectedFlightInfo,
}) {
  const setInfo = (price, flightInfo) => {
    setTotalPrice(price);
    setSelectedFlightInfo(flightInfo);
  };

  console.log(flights);

  return (
    
    flights.map(({
      id, date, startTime, endTime, price, planeId,
    }) => (
      <div key={id} className="flights-list-item">
        <div className="flights-list-item__info">
          <Typography variant="subtitle1" gutterBottom>
            {date}
          </Typography>
          <Typography variant="h4" gutterBottom>
            {startTime}
            <FlightTakeoffIcon className={classes.icon} fontSize="large" />
            <FlightLandIcon className={classes.icon} fontSize="large" />
            {endTime}
          </Typography>
        </div>
        <div className="flights-list-item__price">
          <button
            type="button"
            className="price-link"
            onClick={() => setInfo(price, {
              id, date, startTime, endTime, price, planeId,
            })}
          >
            $ {price}
          </button>
        </div>
      </div>
    ))
  );
}

export default FlightsListItems;
