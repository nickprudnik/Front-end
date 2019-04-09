import { getAirports } from "../../../api/index";
import {
  AIRPORT_HAS_ERRORED,
  AIRPORT_FETCH_DATA_SUCCESS
} from "../actionTypes";

export function hasErrored(bool) {
  return {
    type: AIRPORT_HAS_ERRORED,
    hasErrored: bool
  };
}

export function fetchDataSuccess(items) {
  return {
    type: AIRPORT_FETCH_DATA_SUCCESS,
    items
  };
}

export function airportsFetchData() {
  return dispatch => {
    getAirports()
      .then(res => {
        if (!res.data.airports.length) {
          throw Error(res.statusText);
        }
        return res;
      })
      .then(res => res.data.airports)
      .then(airports => dispatch(fetchDataSuccess(airports)))
      .catch(() => dispatch(hasErrored(true)));
  };
}
