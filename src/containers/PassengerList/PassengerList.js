import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { compose } from "redux";
import { Form } from "react-final-form";
import Button from "react-bootstrap/Button";
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
    const passengers = Object.keys(values)
      .sort()
      .map(key => values[key]);

    const sortablePassengers = [];

    for (let passenger in passengers) {
      sortablePassengers.push(passengers[passenger]);
    }

    const passengersArray = [];
    const passAmount = sortablePassengers.length / 6;

    for (let i = 0; i < passAmount; i++) {
      const obj = {
        firstname: sortablePassengers[i + passAmount * 2],
        lastname: sortablePassengers[i + passAmount * 3],
        email: sortablePassengers[i + passAmount * 1],
        street: sortablePassengers[i + passAmount * 5],
        city: sortablePassengers[i * passAmount * 6],
        passportscopy: sortablePassengers[i + passAmount * 4]
      };
      passengersArray.push(obj);
    }
    const history = this.props.history;
    this.props.setPassengersInfo(values);
    this.props.setPassengersInfo(passengersArray);
    return history.push("/select_seats");
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
            <div className="passenger_list_form">
              <FieldArray name="information">
                {() =>
                  passengersAmount.map((elem, index) => (
                    <div className="expandable-panel" key={index}>
                      <Header index={index} />
                      <Details index={index} />
                    </div>
                  ))
                }
              </FieldArray>
              <Button
                className="card-buttons price"
                type="submit"
                disabled={submitting || pristine}
              >
                Confirm
              </Button>
            </div>
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
