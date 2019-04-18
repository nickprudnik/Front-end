import {
  ORDER_IS_LOADING,
  ORDER_HAS_ERRORED,
  ORDER_FETCH_DATA_SUCCESS
} from "../actionTypes";
import { getOrders } from "../../../api/index";

export function isFailed(bool) {
  return {
    type: ORDER_HAS_ERRORED,
    isFailed: bool
  };
}

export function isLoading(loading) {
  return {
    type: ORDER_IS_LOADING,
    isLoading: loading
  };
}

export function fetchDataSuccess(items) {
  return {
    type: ORDER_FETCH_DATA_SUCCESS,
    items
  };
}

export function orderFetchData({ items }) {
  return dispatch => {
    return getOrders({ items })
      .then(res => {
        dispatch(isLoading(false));
        return res;
      })
      .then(res => res.data.order)
      .then(order => dispatch(fetchDataSuccess(order)))
      .catch(() => {
        dispatch(isFailed(true));
      });
  };
}
