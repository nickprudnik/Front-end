import { combineReducers } from 'redux';
import postReducer from './postReducer';
import searchPage from '../search/index';
import user from '../user/reducers';
import data from '../data';

export default combineReducers({
    userData: postReducer,
    searchPage,
    user,
    data
});