import { SIGN_UP, SIGN_IN } from '../../actions/types';

export default function postReducer(state = [], action) {
  switch (action.type) {
    case SIGN_UP:
      return [...state, action.userData];
    case SIGN_IN:
      return [...state, action.userData];  
    default:
      return state;
  }
}