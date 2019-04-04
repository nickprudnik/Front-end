import React, { Component, Fragment } from "react";

class Seats extends Component {
  render() {
    const seats = [];
    for (let i = 1; i <= this.props.seatsAmount; i++) {
      seats.push(
        <div className="seat" id={i + this.props.thisRowLetter}>
          <div className="label" id={i + this.props.thisRowLetter}>
            {i + this.props.thisRowLetter}
          </div>
        </div>
      );
    }

    return <Fragment>{seats}</Fragment>;
  }
}

export default Seats;
