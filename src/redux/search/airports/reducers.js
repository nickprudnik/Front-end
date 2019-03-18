import { handleActions } from 'redux-actions';
import { AIRPORT_FETCH_DATA_SUCCESS, AIRPORT_HAS_ERRORED } from '../actionTypes';

function getInitialState () {
  return {
    items: [],
    hasErrored: false
  };
}

const airports = handleActions(
  {
    [AIRPORT_FETCH_DATA_SUCCESS]: (state, action) => ({
      ...state, items: action.items
    }),
    [AIRPORT_HAS_ERRORED]: (state, action) => ({
      ...state, hasErrored: action.hasErrored
    }),
  },
  getInitialState ()
);

export default airports;