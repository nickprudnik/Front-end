import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loginUser } from "../actions/authentication";
import classnames from "classnames";

import "../index.css";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
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
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(user);
  }

  render() {
    const { errors } = this.props;
    return (
      <div className="sign_up_container">
        <div className="container-signin">
          <h2 className="signin_headline">Login</h2>
          <form onSubmit={this.handleSubmit}>
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
              <button type="submit" className="btn btn-primary">
                Login User
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  loginUser
};

const mapStateToProps = state => ({
  userData: state.userData.userData,
  errors: state.userData.error,
  isLogged: state.isLogged
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SignIn));
