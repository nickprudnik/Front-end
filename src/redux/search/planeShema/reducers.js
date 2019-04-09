import { handleActions } from "redux-actions";
import {
  PLANES_HAS_ERRORED,
  PLANES_IS_LOADING,
  PLANES_FETCH_DATA_SUCCESS
} from "../actionTypes";

function getInitialState() {
  return {
    hasErrored: false,
    isLoading: false,
    items: []
  };
}

const plane = handleActions(
  {
    [PLANES_HAS_ERRORED]: (state, action) => ({
      ...state,
      hasErrores: action.hasErrored
    }),
    [PLANES_IS_LOADING]: (state, action) => ({
      ...state,
      isLoading: action.isLoading
    }),
    [PLANES_FETCH_DATA_SUCCESS]: (state, action) => ({
      ...state,
      items: action.items
    })
  },
  getInitialState()
);

export default plane;
