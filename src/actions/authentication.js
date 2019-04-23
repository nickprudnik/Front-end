import {
  SIGN_UP_SUCCESS,
  SIGN_IN_SUCCESS,
  RESET_PASS_SUCCESS,
  SET_CURRENT_USER,
  AUTHENTICATION_HAS_ERRORED
} from "./types";
import { signUp, signIn, resetPass } from "../api/index";
import { history } from "../App";
import setAuthToken from "../setAuthToken";
import jwt_decode from "jwt-decode";
import * as routes from "../constants";

export const registerUser = user => dispatch => {
  signUp(user)
    .then(res => {
      dispatch(registerUserSuccess(res));
      history.push(routes.HOME);
    })
    .catch(err => {
      dispatch({
        type: AUTHENTICATION_HAS_ERRORED,
        payload: err.response.data
      });
    });
};

export const registerUserSuccess = data => {
  return {
    type: SIGN_UP_SUCCESS,
    payload: {
      email: data.email,
      password: data.password
    }
  };
};

export const loginUser = user => dispatch => {
  signIn(user)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
      dispatch({
        type: AUTHENTICATION_HAS_ERRORED,
        payload: err.response
      });
    });
};

export const loginUserSuccess = data => {
  return {
    type: SIGN_IN_SUCCESS,
    payload: {
      email: data.email,
      password: data.password
    }
  };
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const logoutUser = history => dispatch => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  history.push(routes.SIGN_IN);
};

export const resetPassword = ({ email, password }) => {
  return dispatch => {
    return resetPass({ email, password })
      .then(res => {
        dispatch(resetPasswordSuccess(res));
        history.push(routes.SIGN_IN);
      })
      .catch(error => {
        throw error;
      });
  };
};

export const resetPasswordSuccess = data => {
  return {
    type: RESET_PASS_SUCCESS,
    payload: {
      email: data.email,
      password: data.password
    }
  };
};
