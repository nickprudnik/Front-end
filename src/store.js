import { createStore } from 'redux';
import rootReducer from './reducers';

const inititalState = {};

const store = createStore(
        rootReducer, 
        inititalState, 
        );

export default store;