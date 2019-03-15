import { handleActions } from 'redux-actions';
import { SIGN_UP, SIGN_IN, RESET_PASS, GET_ERRORS } from '../../actions/types';

function noname () {
  return {
    userData: null,
    error: null,
    isLogged: false
  };
}

const postReducer = handleActions(
  {
    [SIGN_UP]: (state, action) => ({
      ...state, userData: action.userData
    }),

    [SIGN_IN]: (state, action) => ({
     ...state, userData: action.userData, isLogged: true
    }),

    [RESET_PASS]: (state, action) => ({
      ...state, userData: action.userData
    }),

    [GET_ERRORS]: (state, action) => ({
      ...state, error: action.payload, userData: null,
    }),
  },
  noname ()
);

export default postReducer;