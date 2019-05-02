import { getBestDeals } from "../../../api/index";
import {
  BESTDEALS_HAS_ERRORED,
  BESTDEALS_IS_LOADING,
  BESTDEALS_FETCH_DATA_SUCCES
} from "../actionTypes";

export function hasErrored(bool) {
  return {
    type: BESTDEALS_HAS_ERRORED,
    hasErrored: bool
  };
}

export function isLoading(bool) {
  return {
    type: BESTDEALS_IS_LOADING,
    isLoading: bool
  };
}

export function fetchDataSuccess(items) {
  return {
    type: BESTDEALS_FETCH_DATA_SUCCES,
    items
  };
}

export function bestdealsFetchData() {
  return dispatch => {
    dispatch(isLoading(true));

    getBestDeals()
      .then(bestdeals => dispatch(fetchDataSuccess(bestdeals.data)))
      .catch(() => {
        dispatch(hasErrored(true));
      });
  };
}
