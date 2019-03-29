import { handleActions } from 'redux-actions';
import { NEWS_FETCH_DATA_SUCCESS } from '../actionTypes';

function getInitialState () {
  return {
    items: [],
  };
}

const news = handleActions(
  {
    [NEWS_FETCH_DATA_SUCCESS]: (state, action) => ({
      ...state, items: action.items,
    }),
  },
  getInitialState ()
);

export default news;