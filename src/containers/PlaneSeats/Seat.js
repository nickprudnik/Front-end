import React, { Component } from "react";

class Seat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isBooked: false
    };
  }

  bookSeat = () => {
    this.setState({ isBooked: !this.state.isBooked });
  };

  render() {
    return (
      <div
        onClick={this.bookSeat}
        className={this.state.isBooked ? "label-reserved" : "label"}
        id={this.props.id}
      >
        {this.props.id}
      </div>
    );
  }
}

export default Seat;
