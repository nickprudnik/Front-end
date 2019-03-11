import { handleActions } from 'redux-actions';
import { SIGN_UP, SIGN_IN, RESET_PASS, GET_ERRORS } from '../../actions/types';

const initialState = {
  userData: null,
  error: null
};

const postReducer = handleActions(

export const postReducer = handleActions(
  {
    [SIGN_UP]: (state = initialState, action) => ({
      ...state, userData: action.userData
    }),

    [SIGN_IN]: (state = initialState, action) => ({
     ...state, userData: action.userData
    }),

    [RESET_PASS]: (state = initialState, action) => ({
      ...state, userData: action.userData
    }),

    [GET_ERRORS]: (state = initialState, action) => ({
      ...state, error: action.payload, userData: null,
    }),
  },
  { ...initialState }
);

export default postReducer;