import { combineReducers } from "redux";
import postReducer from "./postReducer";
import searchPage from "../search/index";
import user from "../user/reducers";
import authReducer from "./authReducer";
import order from "../search/order/reducers";

export default combineReducers({
  userData: postReducer,
  searchPage,
  user,
  auth: authReducer,
  order
});
