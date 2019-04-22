import { handleActions } from "redux-actions";
import { SET_CURRENT_USER } from "../../actions/types";
import isEmpty from "../../is-empty";

function getInitialState() {
  return {
    isAuthenticated: false,
    user: {}
  };
}

const authReducer = handleActions(
  {
    [SET_CURRENT_USER]: (state, action) => ({
      ...state,
      isAuthenticated: !isEmpty(action.payload),
      user: action.payload
    })
  },
  getInitialState()
);

export default authReducer;
