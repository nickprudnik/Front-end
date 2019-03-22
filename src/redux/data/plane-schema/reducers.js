import actionTypes from '../actionTypes';
import { handleActions } from 'redux-actions';

function getInitialState () {
  return {
  planeSchema: {},
  hasErrored: false,
  }
};

const plane = handleActions(
  {
    [actionTypes.GET_PLANE_SCHEMA]: (state, action) => ({
      ...state, schema: action.schema
    }),
    [actionTypes.PLANE_SCHEMA_HAS_ERRORED]: (state, action) => ({
      ...state, hasErrored: action.hasErrored
    }),
  },
  getInitialState ()
);

export default plane;