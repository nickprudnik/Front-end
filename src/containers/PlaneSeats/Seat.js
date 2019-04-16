import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import PropTypes from "prop-types";
import { selectPassenger } from "../../redux/user/actions";

class Seat extends Component {
  static propTypes = {
    selectPassenger: PropTypes.func.isRequired,
    passengersInfo: PropTypes.array.isRequired
  };

  checkIsReserved = () => {
    const IsReserved = this.props.passengersInfo.some(
      passengersInfo => passengersInfo.selectedSeat == this.props.id
    );

    return (
      <div
        className={IsReserved ? "label-reserved" : "label"}
        id={this.props.id}
      >
        {this.props.id}
      </div>
    );
  };

  render() {
    return <React.Fragment>{this.checkIsReserved()}</React.Fragment>;
  }
}

const mapStateToProps = state => ({
  passengersInfo: state.user.passengersInfo
});

const mapDispatchToProps = dispatch => ({
  selectPassenger: id => dispatch(selectPassenger(id))
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Seat);
