import React, { Component, Fragment } from "react";
import shortid from "shortid";
import Seat from "./Seat";

class Seats extends Component {
  render() {
    const seats = [];
    for (let i = 1; i <= this.props.seatsAmount; i++) {
      seats.push(
        <div
          className="seat"
          id={i + this.props.thisRowLetter}
          key={shortid.generate()}
        >
          <Seat id={i + this.props.thisRowLetter} />
        </div>
      );
    }
    return <Fragment>{seats}</Fragment>;
  }
}

export default Seats;
