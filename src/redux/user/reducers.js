import { handleActions } from "redux-actions";
import actionTypes from "./actionTypes";

function userState() {
  return {
    request: {},
    selectedFlight: [],
    selectedDeal: [],
    passengersInfo: [],
    selectedPassenger: 0,
    totalPrice: 0
  };
}

const user = handleActions(
  {
    [actionTypes.USER_REQUEST]: (state, action) => ({
      ...state,
      request: action.request
    }),
    [actionTypes.PASSENGERS_INFO]: (state, action) => ({
      ...state,
      passengersInfo: action.info
    }),
    [actionTypes.SELECTED_PASSENGER]: (state, action) => ({
      ...state,
      selectedPassenger: action.id
    }),
    [actionTypes.USER_SELECTED_FLIGHT_INFO]: (state, action) => ({
      ...state,
      selectedFlight: action.flightInfo
    }),
    [actionTypes.USER_SELECTED_DEAL_INFO]: (state, action) => ({
      ...state,
      selectedDeal: action.dealInfo
    }),
    [actionTypes.USER_TOTAL_PRICE]: (state, action) => ({
      ...state,
      totalPrice: state.totalPrice
        ? +state.totalPrice + +action.price
        : +action.price
    })
  },
  userState()
);

export default user;
