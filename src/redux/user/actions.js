import actionTypes from "./actionTypes";

export function setUserRequestData(request) {
  return {
    type: actionTypes.USER_REQUEST,
    request
  };
}

export function setSelectedFlightInfo(flightInfo) {
  return {
    type: actionTypes.USER_SELECTED_FLIGHT_INFO,
    flightInfo
  };
}

export function getPlaneLayout(layout) {
  return {
    type: actionTypes.PLANE_LAYOUT,
    layout
  };
}

export function setPassengersInfo(info) {
  return {
    type: actionTypes.PASSENGERS_INFO,
    info
  };
}

export function selectPassenger(id) {
  return {
    type: actionTypes.SELECTED_PASSENGER,
    id
  };
}

export function setTotalPrice(price) {
  return {
    type: actionTypes.USER_TOTAL_PRICE,
    price
  };
}
