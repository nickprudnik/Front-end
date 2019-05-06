import React from "react";
import Button from "react-bootstrap/Button";
import moment from "moment";
import shortid from "shortid";
import { Link } from "react-router-dom";

function BookingButton({ bestdeals, setSelectedBestDealInfo }) {
  const setInfo = dealInfo => {
    setSelectedBestDealInfo(dealInfo);
  };

  return bestdeals.map(
    ({
      dateFrom,
      dateTo,
      startTime,
      endTime,
      fromCountry,
      toCountry,
      price,
      adult
    }) => (
      <tr key={shortid.generate()}>
        <td>{moment(dateFrom).format("LL")}</td>
        <td>{moment(dateTo).format("LL")}</td>
        <td>{startTime}</td>
        <td>{endTime}</td>
        <td>{fromCountry}</td>
        <td>{toCountry}</td>
        <td>{price}</td>
        <td>{adult}</td>
        <Link to="/select_seats">
          <td>
            <Button
              className="card-buttons"
              onClick={() =>
                setInfo({
                  dateFrom,
                  dateTo,
                  fromCountry,
                  toCountry,
                  startTime,
                  endTime,
                  price,
                  adult
                })
              }
            >
              BOOK IT
            </Button>
          </td>
        </Link>
      </tr>
    )
  );
}

export default BookingButton;
