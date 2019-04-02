import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { planeFetchData } from "../../redux/search/planeShema/actions";

import Rows from "./Rows";

import "./index.scss";
import UserContact from "../../components/UserContact/UserContact";

class PlaneSeats extends Component {
  static propTypes = {
    planeFetchData: PropTypes.func.isRequired,
    plane: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.planeFetchData();
  }

  render() {
    const rows = [];
    for (let i = 0; i < this.props.plane.rows; i++) {
      rows.push(
        <Rows
          className={"row"}
          subRows={this.props.plane.subRows}
          seats={this.props.plane.seats}
        />
      );
    }
    return (
      <Fragment>
        <div className="plane">
          <div className="cockpit">
            <h1>Please select seats</h1>
          </div>
          <div className="exit exit--front fuselage" />
          <div className="cabin fuselage">{rows}</div>
        </div>
        <UserContact />
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
