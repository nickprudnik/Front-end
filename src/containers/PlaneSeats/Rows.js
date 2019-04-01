import React, { Component } from "react";
import Seats from "./Seats";

class Rows extends Component {
  render() {
    const subRows = [];
    for (let i = 1; i <= this.props.subRows; i++) {
      subRows.push(<Seats seatsAmount={this.props.seats} />);
    }
    return <div className="row">{subRows}</div>;
  }
}

export default Rows;
