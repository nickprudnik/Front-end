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

export function hasErrored(bool) {
  return {
    type: NEWS_HAS_ERRORED,
    hasErrored: bool
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
        if (!res.data.news.length) {
          throw Error(res.statusText);
        }

        dispatch(isLoading(false));

        return res;
      })
      .then(res => res.data.news)
      .then(news => dispatch(fetchDataSuccess(news)))
      .catch(() => {
        dispatch(hasErrored(true));
      });
  };
}
