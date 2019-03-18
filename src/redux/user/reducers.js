import { handleActions } from 'redux-actions';
import actionTypes from './actionTypes';

function userState () {
  return {
    request: {},
    selectedFlight: {},
    planeLayout: {
    rows: 0,
    location: [],
  },
    totalPrice: 0,
    passengersInfo: [],
    selectedPassenger: 0,
};
  }

const user = handleActions(
  {
    [actionTypes.USER_REQUEST]: (state, action) => ({
      ...state, request: action.request
    }),
    [actionTypes.USER_SELECTED_FLIGHT_INFO]: (state, action) => ({
      ...state, selectedFlight: action.flightInfo
    }),
    [actionTypes.PLANE_LAYOUT]: (state, action) => ({
      ...state, planeLayout: action.layout
    }),
    [actionTypes.USER_TOTAL_PRICE]: (state, action) => ({
      ...state, totalPrice: state.totalPrice ? +state.totalPrice + +action.price : +action.price
    }),
    [actionTypes.PASSENGERS_INFO]: (state, action) => ({
      ...state, passengersInfo: action.info
    }),
    [actionTypes.SELECTED_PASSENGER]: (state, action) => ({
      ...state, selectedPassenger: action.id
    }),
  },
  userState ()
);

export default user;
