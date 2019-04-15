import React, { Component } from "react";

import "./index.scss";

class EnableSeats extends Component {
  render() {
    return (
      <div className="seatsel-pane__seats">
        <div className="seatsel-pane__seats-availabel">
          <div className="availabel" />
          <span>AVAILABLE</span>
        </div>
        <div className="seatsel-pane__seats-unavailable">
          <div className="unavailable" />
          <span>NOT AVAILABLE</span>
        </div>
        <div className="seatsel-pane__seats-assigned">
          <div className="assigned" />
          <span>CHOSEN SEAT</span>
        </div>
      </div>
    );
  }
}

export default EnableSeats;
