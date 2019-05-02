import { getPlainShema } from "../../../api";
import {
  PLANES_HAS_ERRORED,
  PLANES_IS_LOADING,
  PLANES_FETCH_DATA_SUCCESS
} from "../actionTypes";

export function hasErrored(bool) {
  return {
    type: PLANES_HAS_ERRORED,
    hasErrored: bool
  };
}

export function isLoading(bool) {
  return {
    type: PLANES_IS_LOADING,
    isLoading: bool
  };
}

export function fetchDataSuccess(items) {
  return {
    type: PLANES_FETCH_DATA_SUCCESS,
    items
  };
}

export function planeFetchData() {
  return dispatch => {
    dispatch(isLoading(true));
    getPlainShema()
      .then(plane => dispatch(fetchDataSuccess(plane.data)))
      .catch(() => {
        dispatch(hasErrored(true));
      });
  };
}
