import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./index.scss";
import Checkbox from "@material-ui/core/Checkbox";
import shortid from "shortid";
import { luggageFetchData } from "../../../../../redux/search/luggage/actions";

class Luggage extends React.Component {
  static propTypes = {
    luggage: PropTypes.array.isRequired,
    luggageFetchData: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.luggageFetchData("/luggage");
  }

  render() {
    const { luggage } = this.props;
    return (
      <div className="luggage-list">
        {luggage.map(({ kg, price, styleclass, image }) => (
          <label htmlFor={price} key={shortid.generate()}>
            <Checkbox id={price} name={"luggage"} value={price} /> {kg} kg{" "}
            <img className={styleclass} src={image} />
          </label>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  luggage: state.searchPage.luggage.items
});

const mapDispatchToProps = dispatch => ({
  luggageFetchData: values => dispatch(luggageFetchData(values))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Luggage);
