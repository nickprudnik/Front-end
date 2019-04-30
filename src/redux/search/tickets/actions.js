import {
  TICKETS_HAS_ERRORED,
  TICKETS_IS_LOADING,
  TICKETS_FETCH_DATA_SUCCESS
} from "../actionTypes";
import { setUserRequestData } from "../../user/actions";
import { getTickets } from "../../../api/index";

export function isFailed(bool) {
  return {
    type: TICKETS_HAS_ERRORED,
    isFailed: bool
  };
}

export function isLoading(loading) {
  return {
    type: TICKETS_IS_LOADING,
    isLoading: loading
  };
}

export function fetchDataSuccess(items) {
  return {
    type: TICKETS_FETCH_DATA_SUCCESS,
    items: items
  };
}

export function ticketsFetchData(userRequest) {
  return dispatch => {
    dispatch(isLoading(true));
    dispatch(setUserRequestData(userRequest));

    getTickets()
      .then(res => {
        dispatch(isLoading(false));
        return res;
      })
      .then(tickets => dispatch(fetchDataSuccess(tickets.data)))
      .catch(() => {
        dispatch(isFailed(true));
      });
  };
}
