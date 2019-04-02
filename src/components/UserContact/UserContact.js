import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "../../index.scss";

class UserContact extends Component {
  constructor() {
    super();
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
  }

  render() {
    return (
      <div className="container" style={{ marginTop: "50px", width: "700px" }}>
        <h2 style={{ marginBottom: "40px" }}>PASSENGERS INFO</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="FIRST NAME"
              className="form-control"
              name="first name"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="LAST NAME"
              className="form-control"
              name="last name"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="select-gender">
            <select className="custom-select">
              <option selected>CHOOSE YOUR GENDER PLEASE</option>
              <option value="female">FEMALE</option>
              <option value="male">MALE</option>
            </select>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Continue
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(UserContact);
