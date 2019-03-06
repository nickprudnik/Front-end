import { combineReducers } from 'redux';
import postReducer from './postReducer';
// import errorReducer from './errorReducer';

export default combineReducers({
    userData: postReducer
    // errors: errorReducer
});