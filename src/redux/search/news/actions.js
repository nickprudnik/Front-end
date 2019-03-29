import axios from '../../../data';
import { NEWS_HAS_ERRORED, NEWS_IS_LOADING, NEWS_FETCH_DATA_SUCCESS } from '../actionTypes';

export function fetchDataSuccess(items) {
  return {
    type: NEWS_FETCH_DATA_SUCCESS,
    items,
  };
}

export function hasErrored(bool) {
  return {
    type: NEWS_HAS_ERRORED,
    hasErrored: bool,
  };
}

export function isLoading(bool) {
  return {
    type: NEWS_IS_LOADING,
    isLoading: bool,
  };
}

export function newsFetchData(url) {
  return (dispatch) => {
    axios.post(url)
      .then((response) => {
        if (!response.data.news.length) {
          throw Error(response.statusText);
        }

        dispatch(isLoading(false));

        return response;
      })
      .then(response => response.data.news)
      .then(news => dispatch(fetchDataSuccess(news)))
      .catch(() => {
        dispatch(hasErrored(true));
      });
  };
}
