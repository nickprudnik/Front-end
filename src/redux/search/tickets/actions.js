import axios from '../../../data';
import { TICKETS_HAS_ERRORED, TICKETS_IS_LOADING, TICKETS_FETCH_DATA_SUCCESS } from '../actionTypes';
import { setUserRequestData } from '../../user/actions';

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
    items,
  };
}

export function ticketsFetchData(url, userRequest) {
  return (dispatch) => {
    dispatch(isLoading(true));
    dispatch(setUserRequestData(userRequest));

    getTickets()
      .then(res => {
        dispatch(isLoading(false));
        return res;
      })
      .then(response => response.data.tickets)
      .then(tickets => dispatch(fetchDataSuccess(tickets)))
      .catch(() => {
        dispatch(isFailed(true));
      });
  };
}
