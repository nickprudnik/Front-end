import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import moment from "moment";
import { bestdealsFetchData } from "../../redux/search/bestDeals/actions";
import { Link } from "react-router-dom";

class BestDeals extends React.Component {
  static propTypes = {
    bestdealsFetchData: PropTypes.func.isRequired,
    bestdeals: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { bestdeals } = this.props;
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>Date From</th>
            <th>Date To</th>
            <th>Вeparture time</th>
            <th>Arrival time</th>
            <th>From Country</th>
            <th>To Country</th>
            <th>Price</th>
            <th>Book right now ⤋</th>
          </tr>
        </thead>
        <tbody>
          {bestdeals.map(
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
                <Link to="/select_seats">
                  <td>
                    <Button className="card-buttons">BOOK IT</Button>
                  </td>
                </Link>
              </tr>
            )
          )}
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = state => ({
  bestdeals: state.searchPage.bestDeals.items,
  bestdealsHasErrored: state.searchPage.bestDeals.hasErrored,
  bestdealsIsLoading: state.searchPage.bestDeals.isLoading
});

const mapDispatchToProps = dispatch => ({
  bestdealsFetchData: (url, values) => dispatch(bestdealsFetchData(url, values))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BestDeals);
