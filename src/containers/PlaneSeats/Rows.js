import React, { Component } from "react";
import Seats from "./Seats";

class Rows extends Component {
  render() {
    const subRows = [];
    for (var i = 1; i <= this.props.subRows; i++) {
      subRows.push(
        <div className="subrow">
          <Seats seatsAmount={this.props.seats} />
        </div>
      );
    }
    return <div className="row-plane">{subRows}</div>;
  }
}

export default Rows;
