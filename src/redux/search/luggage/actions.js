import {
  LUGGAGE_IS_FAILED,
  LUGGAGE_IS_LOADING,
  LUGGAGE_FETCH_DATA_SUCCESS
} from "../actionTypes";
import { getLuggage } from "../../../api/index";

export function fetchDataSuccess(items) {
  return {
    type: LUGGAGE_FETCH_DATA_SUCCESS,
    items
  };
}

export function isFailed(bool) {
  return {
    type: LUGGAGE_IS_FAILED,
    isFailed: bool
  };
}

export function isLoading(bool) {
  return {
    type: LUGGAGE_IS_LOADING,
    isLoading: bool
  };
}

export function luggageFetchData() {
  return dispatch => {
    return getLuggage()
      .then(res => {
        dispatch(isLoading(false));
        return res;
      })
      .then(luggage => dispatch(fetchDataSuccess(luggage.data)))
      .catch(() => {
        dispatch(isFailed(true));
      });
  };
}
