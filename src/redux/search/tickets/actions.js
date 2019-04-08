import {
  TICKETS_HAS_ERRORED,
  TICKETS_IS_LOADING,
  TICKETS_FETCH_DATA_SUCCESS
} from "../actionTypes";
import { setUserRequestData } from "../../user/actions";
import { getTickets } from "../../../api/index";

export function hasErrored(bool) {
  return {
    type: TICKETS_HAS_ERRORED,
    hasErrored: bool
  };
}

export function isLoading(bool) {
  return {
    type: TICKETS_IS_LOADING,
    isLoading: bool
  };
}

export function fetchDataSuccess(items) {
  return {
    type: TICKETS_FETCH_DATA_SUCCESS,
    items
  };
}

export function ticketsFetchData(userRequest) {
  return dispatch => {
    dispatch(isLoading(true));
    dispatch(setUserRequestData(userRequest));

    getTickets()
      .then(res => {
        if (!res.data.tickets.length) {
          throw Error(res.statusText);
        }

        dispatch(isLoading(false));

        return res;
      })
      .then(res => res.data.tickets)
      .then(tickets => dispatch(fetchDataSuccess(tickets)))
      .catch(() => {
        dispatch(hasErrored(true));
      });
  };
}
