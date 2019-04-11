import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { Form } from "react-final-form";
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";
import PropTypes from "prop-types";
import { setPassengersInfo } from "../../redux/user/actions";
import "./index.scss";
import Details from "./expandable-panel/details";
import Header from "./expandable-panel/header";

class PassengersList extends Component {
  static propTypes = {
    userRequest: PropTypes.object.isRequired,
    setPassengersInfo: PropTypes.func.isRequired
  };

  onSubmit = values => {
    const passengers = {};
    Object.keys(values)
      .sort()
      .forEach(function(key) {
        passengers[key] = values[key];
      });

    const sortablePassengers = [];

    for (let passenger in passengers) {
      sortablePassengers.push(passengers[passenger]);
    }

    const passengersArray = [];
    const passAmount = sortablePassengers.length / 3;

    for (let i = 0; i < passAmount; i++) {
      const obj = {
        firstname: sortablePassengers[i],
        lastname: sortablePassengers[i + passAmount]
      };
      passengersArray.push(obj);
    }
    this.props.setPassengersInfo(values);
    this.props.setPassengersInfo(passengersArray);
  };

  render() {
    const { adult } = this.props.userRequest;
    const passengersAmount = new Array(+adult || 0).fill(1);

    return (
      <Form
        onSubmit={this.onSubmit}
        mutators={{
          ...arrayMutators
        }}
        render={({ handleSubmit }, pristine, submitting) => (
          <form onSubmit={handleSubmit}>
            <FieldArray name="information">
              {() =>
                passengersAmount.map((elem, index) => (
                  <div className="passenger_list_information">
                    <div className="expandable-panel" key={index}>
                      <Header index={index} />
                      <Details index={index} />
                    </div>
                  </div>
                ))
              }
            </FieldArray>

            <Link to="/select_seats">
              <button type="submit" disabled={submitting || pristine}>
                Confirm
              </button>
            </Link>
          </form>
        )}
      />
    );
  }
}

const mapStateToProps = state => ({
  userRequest: state.user.request
});

const mapDispatchToProps = dispatch => ({
  setPassengersInfo: info => dispatch(setPassengersInfo(info))
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(PassengersList);
