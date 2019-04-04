import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { planeFetchData } from "../../redux/search/planeShema/actions";

import Rows from "./Rows";

import "./index.scss";
import UserContact from "../../components/UserContact/UserContact";
import ReservedList from "./ReservedList";

class PlaneSeats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookedSeats: []
    };
  }

  static propTypes = {
    planeFetchData: PropTypes.func.isRequired,
    plane: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.planeFetchData();
  }

  bookSeat = e => {
    this.setState({
      bookedSeats: [...this.state.bookedSeats, e.target.id]
    });
    console.log(e.target.id);
    console.log(this.state.bookedSeats);
  };

  render() {
    const rows = [];
    for (let i = 0; i < this.props.plane.rows; i++) {
      rows.push(
        <Rows
          className={"row"}
          startingLetter={i * 3 + 65}
          subRows={this.props.plane.subRows}
          seats={this.props.plane.seats}
        />
      );
    }
    return (
      <Fragment>
        <div className="plane_seats_svg">
          <div className="plane">
            <div className="cockpit">
              <h1>Please select seats</h1>
            </div>
            <div className="exit exit--front fuselage" />
            <div className="cabin fuselage" onClick={this.bookSeat}>
              {rows}
            </div>
            <div className="exit exit--front fuselage" />
          </div>
          <ReservedList bookedSeats={this.state.bookedSeats} />
        </div>
        <UserContact className="user_contacts" />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  plane: state.searchPage.plane.items,
  planeHasErrored: state.searchPage.plane.hasErrored,
  planeIsLoading: state.searchPage.plane.isLoading
});

const mapDispatchToProps = dispatch => ({
  planeFetchData: values => dispatch(planeFetchData(values))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PlaneSeats)
);
