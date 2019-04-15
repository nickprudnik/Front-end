import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TableRow from "./table-row";
import "./index.scss";
import shortid from "shortid";

function TableRows({ passengersInfo }) {
  TableRows.propTypes = {
    passengersInfo: PropTypes.array.isRequired
  };

  return (
    <Fragment>
      {passengersInfo.map(
        ({ firstname, lastname, email, street, city }, index) => (
          <TableRow
            key={shortid.generate()}
            firstname={firstname}
            lastname={lastname}
            email={email}
            street={street}
            city={city}
            index={index}
          />
        )
      )}
    </Fragment>
  );
}

const mapStateToProps = state => ({
  passengersInfo: state.user.passengersInfo
});

export default connect(mapStateToProps)(TableRows);
