import {
  NEWS_HAS_ERRORED,
  NEWS_IS_LOADING,
  NEWS_FETCH_DATA_SUCCESS
} from "../actionTypes";
import { getNews } from "../../../api/index";

export function fetchDataSuccess(items) {
  return {
    type: NEWS_FETCH_DATA_SUCCESS,
    items
  };
}

export function isFailed(bool) {
  return {
    type: NEWS_HAS_ERRORED,
    isFailed: bool
  };
}

export function isLoading(bool) {
  return {
    type: NEWS_IS_LOADING,
    isLoading: bool
  };
}

export function newsFetchData({ items }) {
  return dispatch => {
    return getNews({ items })
      .then(res => {
        dispatch(isLoading(false));
        return res;
      })
      .then(res => res.data.news)
      .then(news => dispatch(fetchDataSuccess(news)))
      .catch(() => {
        dispatch(isFailed(true));
      });
  };
}
