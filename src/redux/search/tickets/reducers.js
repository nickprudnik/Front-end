import { handleActions } from 'redux-actions';
import { TICKETS_IS_LOADING, TICKETS_HAS_ERRORED, TICKETS_FETCH_DATA_SUCCESS } from '../actionTypes';

function getInitialState () {
  return {
    hasErrored: false,
    isLoading: false,
    items: [],
  };
}

const tickets = handleActions(
  {
    [TICKETS_HAS_ERRORED]: (state, action) => ({
      ...state, hasErrores: action.hasErrored
    }),
    [TICKETS_IS_LOADING]: (state, action) => ({
      ...state, isLoading: action.isLoading
    }),
    [TICKETS_FETCH_DATA_SUCCESS]: (state, action) => ({
      ...state, items: action.items,
    }),
  },
  getInitialState ()
);

export default tickets;