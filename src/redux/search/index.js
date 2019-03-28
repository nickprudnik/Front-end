import { combineReducers } from 'redux';
import tickets from './tickets/reducers';
import airports from './airports/reducers';
import bestDeals from './bestDeals/reducers';

export default combineReducers({
  tickets,
  airports,
  bestDeals,
});
