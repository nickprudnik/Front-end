import React from "react";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ticketsFetchData } from '../../redux/search/tickets/actions';

class BestDeals extends React.Component {
  static propTypes = {
    ticketsFetchData: PropTypes.func.isRequired,
    tickets: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
  }

    render() {
      const {tickets} = this.props;
      console.log(this.props);
      return (
        tickets.map(({dateFrom, dateTo, startTime, endTime, fromCountry, toCountry, price }) => (
          <Table responsive>
        <thead>
            <tr>
            <th>Date From</th>
            <th>Date To</th>
            <th>Start time</th>
            <th>End time</th>
            <th>From Country</th>
            <th>To Country</th>
            <th>Price</th>
            <th>Book right now ⤋</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>{dateFrom}</td>
            <td>{dateTo}</td>
            <td>{startTime}</td>
            <td>{endTime}</td>
            <td>{fromCountry}</td>
            <td>{toCountry}</td>
            <td>{price}</td>
            <td><Button className="card-buttons">BOOK NOW</Button></td>
            </tr>
        </tbody>
        </Table>
        )
      ))
    }
  }

  const mapStateToProps = state => ({
    tickets: state.searchPage.tickets.items,
  });

  const mapDispatchToProps = dispatch => ({
    ticketsFetchData: (url, values) => dispatch(ticketsFetchData(url, values)),
  });

export default connect(mapStateToProps, mapDispatchToProps)(BestDeals);