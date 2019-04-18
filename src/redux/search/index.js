import { combineReducers } from "redux";
import tickets from "./tickets/reducers";
import airports from "./airports/reducers";
import bestDeals from "./bestDeals/reducers";
import news from "./news/reducers";
import plane from "./planeShema/reducers";
import luggage from "./luggage/reducers";
import order from "./orderHistory/reducers";

export default combineReducers({
  tickets,
  airports,
  bestDeals,
  news,
  plane,
  luggage,
  order
});
