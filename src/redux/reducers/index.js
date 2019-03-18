import { combineReducers } from 'redux';
import postReducer from './postReducer';
import searchPage from '../search/index';
import user from '../user/reducers';

export default combineReducers({
    userData: postReducer,
    searchPage,
    user
});