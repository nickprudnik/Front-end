import { combineReducers } from "redux";
import tickets from "./tickets/reducers";
import airports from "./airports/reducers";
import bestDeals from "./bestDeals/reducers";
import news from "./news/reducers";
import plane from "./planeShema/reducers";

export default combineReducers({
  tickets,
  airports,
  bestDeals,
  news,
  plane
});
