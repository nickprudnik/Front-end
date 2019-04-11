import { handleActions } from "redux-actions";
import actionTypes from "./actionTypes";

function userState() {
  return {
    request: {},
    selectedFlight: {},
    passengersInfo: [],
    selectedPassenger: 0
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
    })
  },
  userState()
);

export default user;
