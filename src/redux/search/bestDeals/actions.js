import axios from '../../../data';
import { BESTDEALS_HAS_ERRORED, BESTDEALS_IS_LOADING, BESTDEALS_FETCH_DATA_SUCCES } from '../actionTypes';

export function hasErrored(bool) {
  return {
    type: BESTDEALS_HAS_ERRORED,
    hasErrored: bool,
  };
}

export function isLoading(bool) {
  return {
    type: BESTDEALS_IS_LOADING,
    isLoading: bool,
  };
}

export function fetchDataSuccess(items) {
  return {
    type: BESTDEALS_FETCH_DATA_SUCCES,
    items,
  };
}

export function bestdealsFetchData(url) {
  return (dispatch) => {
    dispatch(isLoading(true));

    axios.post(url)
      .then((response) => {
        if (!response.data.bestdeals.length) {
          throw Error(response.statusText);
        }

        dispatch(isLoading(false));

        return response;
      })
      .then(response => response.data.bestdeals)
      .then(bestdeals => dispatch(fetchDataSuccess(bestdeals)))
      .catch(() => {
        dispatch(hasErrored(true));
      });
  };
}
