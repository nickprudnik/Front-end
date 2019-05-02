import React, { Component } from "react";
import Seats from "./Seats";
import shortid from "shortid";

class Rows extends Component {
  render() {
    const subRows = [];
    for (var i = 1; i <= this.props.subRows; i++) {
      subRows.push(
        <div className="subrow" key={shortid.generate()}>
          <Seats
            thisRowLetter={String.fromCharCode(
              this.props.startingLetter + i - 1
            )}
            seatsAmount={this.props.seats}
            onClickSeat={this.props.onClick}
          />
        </div>
      );
    }
    return <div className="row-plane">{subRows}</div>;
  }
}

export default Rows;
