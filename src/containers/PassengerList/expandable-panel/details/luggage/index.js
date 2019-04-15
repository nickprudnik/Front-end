import React from "react";
import PropTypes from "prop-types";
import "./index.scss";
import Checkbox from "@material-ui/core/Checkbox";
import shortid from "shortid";

export default function Luggage({ index }) {
  Luggage.propTypes = {
    index: PropTypes.number.isRequired
  };

  const luggageTypes = [
    {
      kg: "10",
      price: "9"
    },
    {
      kg: "20",
      price: "15"
    },
    {
      kg: "30",
      price: "21"
    },
    {
      kg: "free carry-on bag",
      price: "0"
    }
  ];

  return (
    <div className="luggage-list">
      {luggageTypes.map(({ kg, price }) => (
        <label htmlFor={price} key={shortid.generate()}>
          <Checkbox id={price} name={"luggage" + index} value={price} /> {kg} kg
        </label>
      ))}
    </div>
  );
}
