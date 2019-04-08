import actionTypes from './actionTypes';

export function setUserRequestData(request) {
  return {
    type: actionTypes.USER_REQUEST,
    request,
  };
}