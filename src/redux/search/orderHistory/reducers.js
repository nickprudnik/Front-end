import { handleActions } from "redux-actions";
import {
  ORDER_IS_LOADING,
  ORDER_HAS_ERRORED,
  ORDER_FETCH_DATA_SUCCESS
} from "../actionTypes";

function getInitialState() {
  return {
    isFailed: false,
    isLoading: false,
    items: []
  };
}

const order = handleActions(
  {
    [ORDER_HAS_ERRORED]: (state, action) => ({
      ...state,
      isFailed: action.isFailed
    }),
    [ORDER_IS_LOADING]: (state, action) => ({
      ...state,
      isLoading: action.isLoading
    }),
    [ORDER_FETCH_DATA_SUCCESS]: (state, action) => ({
      ...state,
      items: action.items
    })
  },
  getInitialState()
);

export default order;
