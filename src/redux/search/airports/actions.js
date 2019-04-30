import { getAirports } from "../../../api/index";
import {
  AIRPORT_HAS_ERRORED,
  AIRPORT_FETCH_DATA_SUCCESS
} from "../actionTypes";

export function isFailed(bool) {
  return {
    type: AIRPORT_HAS_ERRORED,
    isFailed: bool
  };
}

export function fetchDataSuccess(items) {
  return {
    type: AIRPORT_FETCH_DATA_SUCCESS,
    items: items
  };
}

export const airportsFetchData = () => dispatch => {
  getAirports()
    .then(airports => dispatch(fetchDataSuccess(airports.data)))
    .catch(() => dispatch(isFailed(true)));
};
