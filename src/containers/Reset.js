import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { resetPassword } from "../actions/authentication";

class Reset extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
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
      email: this.state.email,
      password: this.state.password
    };
    this.props.resetPassword(user, this.props.history);
  }

  render() {
    return (
      <div className="sign_up_container">
        <div className="container-reset">
          <h2 className="reset-headline">Reset password</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                name="email"
                onChange={this.handleInputChange}
                value={this.state.email}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                name="password"
                onChange={this.handleInputChange}
                value={this.state.password}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Reset password
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  resetPassword
};

const mapStateToProps = state => ({
  userData: state.userData
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Reset));
