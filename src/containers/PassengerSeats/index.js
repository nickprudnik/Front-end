import React from "react";
import PassengersSeatsTable from "./passengers-seats-table";
import "./index.scss";

function SeatsChoice() {
  return (
    <div className="seats-choice-container">
      <PassengersSeatsTable />
    </div>
  );
}

export default SeatsChoice;
