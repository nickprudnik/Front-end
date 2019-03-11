import { handleActions } from 'redux-actions';
import { SIGN_UP, SIGN_IN, RESET_PASS, GET_ERRORS } from '../../actions/types';

// export default function postReducer(state = initialState, action) {
//   switch (action.type) {
//     case SIGN_UP:
//       return [...state, action.userData];
//     case SIGN_IN:
//       return [...state, action.userData];  
//     case RESET_PASS:
//       return [...state, action.userData];
//     case GET_ERRORS:
//       return action.payload;   
//     default:
//       return state;
//   }
// };
const initialState = {
  userData: null,
  error: null
};

const postReducer = handleActions(
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