import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import PropTypes from "prop-types";
import { selectPassenger } from "../../../../../redux/user/actions";
import "./index.scss";

class TableRow extends React.Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    lastname: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    selectPassenger: PropTypes.func.isRequired,
    passengersInfo: PropTypes.array.isRequired
  };

  select = event => this.props.selectPassenger(+event.target.id);

  render() {
    console.log(this.props);
    return (
      <tr className="passengers-seats__passenger">
        <td className="passengers-seats__info td">
          {this.props.firstname} {this.props.lastname}
        </td>
        <td
          id={this.props.index}
          className="passengers-seats__seat td"
          onClick={this.select}
        >
          {this.props.passengersInfo[this.props.index].selectedSeat || "seat"}
        </td>
      </tr>
    );
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
)(TableRow);
