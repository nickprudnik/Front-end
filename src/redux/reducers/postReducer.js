import { SIGN_UP, SIGN_IN, RESET_PASS, GET_ERRORS } from '../../actions/types';

const initialState = {};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
      return [...state, action.userData];
    case SIGN_IN:
      return [...state, action.userData];  
    case RESET_PASS:
      return [...state, action.userData];
    case GET_ERRORS:
      return action.payload;   
    default:
      return state;
  }
}