import { handleActions } from 'redux-actions';
import { BESTDEALS_IS_LOADING, BESTDEALS_HAS_ERRORED, BESTDEALS_FETCH_DATA_SUCCES } from '../actionTypes';

function getInitialState () {
  return {
    hasErrored: false,
    isLoading: false,
    items: [],
  };
}

const bestdeals = handleActions(
  {
    [BESTDEALS_HAS_ERRORED]: (state, action) => ({
      ...state, hasErrores: action.hasErrored
    }),
    [BESTDEALS_IS_LOADING]: (state, action) => ({
      ...state, isLoading: action.isLoading
    }),
    [BESTDEALS_FETCH_DATA_SUCCES]: (state, action) => ({
      ...state, items: action.items,
    }),
  },
  getInitialState ()
);

export default bestdeals;