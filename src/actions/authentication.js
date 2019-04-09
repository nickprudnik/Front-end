import {
  SIGN_UP_SUCCESS,
  SIGN_IN_SUCCESS,
  RESET_PASS_SUCCESS,
  AUTHENTICATION_HAS_ERRORED
} from "./types";
import { signUp, signIn, resetPass } from "../api/index";
import { history } from "../App";

export const registerUser = user => dispatch => {
  signUp(user)
    .then(res => {
      dispatch(registerUserSuccess(res));
      history.push("/");
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
      dispatch(loginUserSuccess(res));
      history.push("/");
    })
    .catch(err => {
      dispatch({
        type: AUTHENTICATION_HAS_ERRORED,
        payload: err.response.data
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

export const resetPassword = ({ email, password }) => {
  return dispatch => {
    return resetPass({ email, password })
      .then(res => {
        dispatch(resetPasswordSuccess(res));
        history.push("/sign_in");
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
