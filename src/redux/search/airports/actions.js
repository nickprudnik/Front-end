import axios from '../../../data';
import { AIRPORT_HAS_ERRORED, AIRPORT_FETCH_DATA_SUCCESS } from '../actionTypes';

export function isFailed(bool) {
  return {
    type: AIRPORT_HAS_ERRORED,
<<<<<<< HEAD
    isFailed: bool
=======
    hasErrored: bool,
>>>>>>> origin/revert-27-order-list
  };
}

export function fetchDataSuccess(items) {
  return {
    type: AIRPORT_FETCH_DATA_SUCCESS,
    items,
  };
}

<<<<<<< HEAD
export function airportsFetchData() {
  return dispatch => {
    getAirports()
      .then(res => res.data.airports)
=======
export function airportsFetchData(url) {
  return (dispatch) => {
    axios.get(url)
      .then((response) => {
        if (!response.data.airports.length) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.data.airports)
>>>>>>> origin/revert-27-order-list
      .then(airports => dispatch(fetchDataSuccess(airports)))
      .catch(() => dispatch(isFailed(true)));
  };
}
