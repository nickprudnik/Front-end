import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";
import "./index.scss";
import SearchOrder from "./SearchOrder";
import BestdealOrder from "./BestdealOrder";

class OrderDetails extends React.Component {
  render() {
    const { selectedFlight } = this.props;
    return (
      <section className="order-details">
        {selectedFlight == 0 ? <BestdealOrder /> : <SearchOrder />}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  selectedFlight: state.user.selectedFlight
});

export default compose(
  withRouter,
  connect(mapStateToProps)
)(OrderDetails);
