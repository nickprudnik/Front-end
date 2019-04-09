import { handleActions } from "redux-actions";
import {
  NEWS_FETCH_DATA_SUCCESS,
  NEWS_HAS_ERRORED,
  NEWS_IS_LOADING
} from "../actionTypes";

function getInitialState() {
  return {
    hasErrored: false,
    isLoading: false,
    items: []
  };
}

const news = handleActions(
  {
    [NEWS_HAS_ERRORED]: (state, action) => ({
      ...state,
      hasErrores: action.hasErrored
    }),
    [NEWS_IS_LOADING]: (state, action) => ({
      ...state,
      isLoading: action.isLoading
    }),
    [NEWS_FETCH_DATA_SUCCESS]: (state, action) => ({
      ...state,
      items: action.items
    })
  },
  getInitialState()
);

export default news;
