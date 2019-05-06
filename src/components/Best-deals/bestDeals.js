import React from "react";
import Table from "react-bootstrap/Table";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bestdealsFetchData } from "../../redux/search/bestDeals/actions";
import { setSelectedBestDealInfo } from "../../redux/user/actions";
import BookingButton from "./index";

class BestDeals extends React.Component {
  static propTypes = {
    bestdealsFetchData: PropTypes.func.isRequired,
    bestdeals: PropTypes.array.isRequired,
    setSelectedBestDealInfo: PropTypes.func.isRequired
  };

  render() {
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
            <th>Adult</th>
            <th>Book right now ⤋</th>
          </tr>
        </thead>
        <tbody>
          {
            <BookingButton
              bestdeals={this.props.bestdeals}
              setSelectedBestDealInfo={this.props.setSelectedBestDealInfo}
            />
          }
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = state => ({
  bestdeals: state.searchPage.bestDeals.items,
  bestdealsHasErrored: state.searchPage.bestDeals.hasErrored,
  bestdealsIsLoading: state.searchPage.bestDeals.isLoading,
  selectedDeal: state.user.selectedDeal
});

const mapDispatchToProps = dispatch => ({
  bestdealsFetchData: (url, values) =>
    dispatch(bestdealsFetchData(url, values)),
  setSelectedBestDealInfo: dealInfo =>
    dispatch(setSelectedBestDealInfo(dealInfo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BestDeals);
