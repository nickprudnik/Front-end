import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { registerUser } from "../actions/authentication";
import classnames from "classnames";
import PropTypes from "prop-types";

import "../index.css";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirm: "",
      errors: {}
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirm: this.state.password_confirm
    };
    this.props.registerUser(user, this.props.history);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  render() {
    const { errors } = this.props;
    return (
      <div className="sign_up_container">
        <div className="container-signup">
          <h2 className="headline-signup">Registration</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                className={classnames("form-control form-control-lg", {
                  "is-invalid": errors
                })}
                name="name"
                onChange={this.handleInputChange}
                value={this.state.name}
              />
              {errors && <div className="invalid-feedback">{errors.name}</div>}
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                className={classnames("form-control form-control-lg", {
                  "is-invalid": errors
                })}
                name="email"
                onChange={this.handleInputChange}
                value={this.state.email}
              />
              {errors && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                className={classnames("form-control form-control-lg", {
                  "is-invalid": errors
                })}
                name="password"
                onChange={this.handleInputChange}
                value={this.state.password}
              />
              {errors && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Confirm Password"
                className={classnames("form-control form-control-lg", {
                  "is-invalid": errors
                })}
                name="password_confirm"
                onChange={this.handleInputChange}
                value={this.state.password_confirm}
              />
              {errors && (
                <div className="invalid-feedback">
                  {errors.password_confirm}
                </div>
              )}
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Register User
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapDispatchToProps = {
  registerUser
};

const mapStateToProps = state => ({
  userData: state.userData.userData,
  errors: state.userData.error,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SignUp));
