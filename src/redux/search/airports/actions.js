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

// export function airportsFetchData() {
//   return dispatch => {
//     getAirports()
//       .then(res => res.data.airports)
//       .then(airports => dispatch(fetchDataSuccess(airports)))
//       .catch(() => dispatch(isFailed(true)));
//   };
// }

export const airportsFetchData = () => dispatch => {
  getAirports()
    .then(airports => dispatch(fetchDataSuccess(airports.data)))
    .catch(() => dispatch(isFailed(true)));
};
