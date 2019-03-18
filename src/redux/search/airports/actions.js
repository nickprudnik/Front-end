import axios from '../../../data';
import { AIRPORT_HAS_ERRORED, AIRPORT_FETCH_DATA_SUCCESS } from '../actionTypes';

export function hasErrored(bool) {
  return {
    type: AIRPORT_HAS_ERRORED,
    hasErrored: bool,
  };
}

export function fetchDataSuccess(items) {
  return {
    type: AIRPORT_FETCH_DATA_SUCCESS,
    items,
  };
}

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
      .then(airports => dispatch(fetchDataSuccess(airports)))
      .catch(() => dispatch(hasErrored(true)));
  };
}
