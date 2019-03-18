import { handleActions } from 'redux-actions';
import { SIGN_UP_SUCCESS, SIGN_IN_SUCCESS, RESET_PASS_SUCCESS, AUTHENTICATION_HAS_ERRORED } from '../../actions/types';

function getInitialState () {
  return {
    userData: null,
    error: null,
    isLogged: false
  };
}

const postReducer = handleActions(
  {
    [SIGN_UP_SUCCESS]: (state, action) => ({
      ...state, userData: action.userData
    }),

    [SIGN_IN_SUCCESS]: (state, action) => ({
     ...state, userData: action.userData, isLogged: true
    }),

    [RESET_PASS_SUCCESS]: (state, action) => ({
      ...state, userData: action.userData
    }),

    [AUTHENTICATION_HAS_ERRORED]: (state, action) => ({
      ...state, error: action.payload, userData: null,
    }),
  },
  getInitialState ()
);

export default postReducer;