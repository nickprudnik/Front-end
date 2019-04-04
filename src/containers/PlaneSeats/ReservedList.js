import React, { Component } from "react";

class ReservedList extends Component {
  render() {
    return (
      <div className="right">
        <h4>Reserved Seats: ({this.props.bookedSeats.length})</h4>
        <ul>
          {this.props.bookedSeats.map(res => (
            <li key={res}>{res}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ReservedList;
