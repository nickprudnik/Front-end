import { SIGN_UP } from '../../actions/types';

export default function postReducer(state = [], action) {
  switch (action.type) {
    case SIGN_UP:
      return [...state, action.userData];
    default:
      return state;
  }
}