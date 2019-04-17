import { handleActions } from "redux-actions";
import {
  LUGGAGE_FETCH_DATA_SUCCESS,
  LUGGAGE_IS_FAILED,
  LUGGAGE_IS_LOADING
} from "../actionTypes";

function getInitialState() {
  return {
    isFailed: false,
    isLoading: false,
    items: []
  };
}

const luggage = handleActions(
  {
    [LUGGAGE_IS_FAILED]: (state, action) => ({
      ...state,
      isFailed: action.isFailed
    }),
    [LUGGAGE_IS_LOADING]: (state, action) => ({
      ...state,
      isLoading: action.isLoading
    }),
    [LUGGAGE_FETCH_DATA_SUCCESS]: (state, action) => ({
      ...state,
      items: action.items
    })
  },
  getInitialState()
);

export default luggage;
