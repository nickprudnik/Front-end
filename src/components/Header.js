import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import * as routes from "../constants";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authentication";
import { withRouter } from "react-router-dom";

class Header extends Component {
  onLogout(e) {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <Fragment>
        <li className="nav-item">
          <Link className="nav-link" to={routes.HOME}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={routes.RESETPASSWORD}>
            Reset Password
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={routes.ORDERHISTORY}>
            Order History
          </Link>
        </li>
        <li className="navbar-nav ml-auto">
          <Link
            className="nav-link"
            to={routes.HOME}
            onClick={this.onLogout.bind(this)}
          >
            <img
              src={user.avatar}
              alt={user.name}
              title={user.name}
              className="rounded-circle"
              style={{ width: "25px", marginRight: "5px" }}
            />
            Logout
          </Link>
        </li>
      </Fragment>
    );
    const guestLinks = (
      <Fragment>
        <li className="nav-item">
          <Link className="nav-link" to={routes.SIGN_UP}>
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={routes.SIGN_IN}>
            Login
          </Link>
        </li>
      </Fragment>
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to={routes.HOME}>
          Aviabooking
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {isAuthenticated ? authLinks : guestLinks}
          </ul>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(withRouter(Header));
