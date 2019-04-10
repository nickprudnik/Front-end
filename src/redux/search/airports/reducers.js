import { handleActions } from "redux-actions";
import {
  AIRPORT_FETCH_DATA_SUCCESS,
  AIRPORT_HAS_ERRORED
} from "../actionTypes";

function getInitialState() {
  return {
    items: [],
    isFailed: false
  };
}

const airports = handleActions(
  {
    [AIRPORT_FETCH_DATA_SUCCESS]: (state, action) => ({
      ...state,
      items: action.items
    }),
    [AIRPORT_HAS_ERRORED]: (state, action) => ({
      ...state,
      isFailed: action.isFailed
    })
  },
  getInitialState()
);

export default airports;
