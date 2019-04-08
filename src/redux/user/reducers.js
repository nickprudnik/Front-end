import { handleActions } from 'redux-actions';
import actionTypes from './actionTypes';

function userState () {
  return {
    request: {},
};
  }

const user = handleActions(
  {
    [actionTypes.USER_REQUEST]: (state, action) => ({
      ...state, request: action.request
    }),
  },
  userState ()
);

export default user;
