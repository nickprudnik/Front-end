import React, { Fragment } from "react";
import Table from "react-bootstrap/Table";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import moment from "moment";
import { orderFetchData } from "../../redux/search/orderHistory/actions";
import "./index.scss";

class OrderHistory extends React.Component {
  static propTypes = {
    order: PropTypes.array.isRequired,
    orderFetchData: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.orderFetchData("/history_order");
  }

  render() {
    const { order } = this.props;
    return (
      <Fragment>
        <h1 className="name_header">Your last flights</h1>
        <Table responsive>
          <thead>
            <tr>
              <th>Date From</th>
              <th>Date To</th>
              <th>Вeparture time</th>
              <th>Arrival time</th>
              <th>From Country</th>
              <th>To Country</th>
            </tr>
          </thead>
          <tbody>
            {order.map(
              ({
                id,
                dateFrom,
                dateTo,
                startTime,
                endTime,
                fromCountry,
                toCountry,
                price
              }) => (
                <tr key={id}>
                  <td>{moment(dateFrom).format("LL")}</td>
                  <td>{moment(dateTo).format("LL")}</td>
                  <td>{startTime}</td>
                  <td>{endTime}</td>
                  <td>{fromCountry}</td>
                  <td>{toCountry}</td>
                  <td>{price}</td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  order: state.searchPage.order.items,
  orderHasErrored: state.searchPage.order.hasErrored,
  orderIsLoading: state.searchPage.order.isLoading
});

const mapDispatchToProps = dispatch => ({
  orderFetchData: values => dispatch(orderFetchData(values))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(OrderHistory));
