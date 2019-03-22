import actionTypes from '../actionTypes';
import { handleActions } from 'redux-actions';

function getInitialState () {
  return {
    luggageTypes: [],
    hasErrored: false,
  }
};

const luggageTypes = handleActions(
  {
    [actionTypes.GET_LUGGAGE_TYPES]: (state, action) => ({
      ...state, luggageTypes: action.luggageTypes
    }),
    [actionTypes.LUGGAGE_HAS_ERRORED]: (state, action) => ({
      ...state, hasErrored: action.hasErrored
    }),
  },
  getInitialState ()
);

export default luggageTypes;