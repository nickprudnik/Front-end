import { SIGN_UP, SIGN_IN, RESET_PASS, GET_ERRORS } from './types';
import { signUp, signIn, resetPass } from '../api/index';
// import { push } from 'react-router-dom';
import { history } from '../App';


export const registerUser = (user) => dispatch => {
  signUp(user)
          .then(res => dispatch(registerUserSuccess(res)))
          .catch(err => {
              dispatch({
                  type: GET_ERRORS,
                  payload: err.response.data
              });
          });
}

export const registerUserSuccess = (data) => {
  return {
    type: SIGN_UP,
    payload: {
      email: data.email,
      password: data.password
    }
  }
};

export const loginUser = (user) => dispatch => {
  signIn(user)
          .then((res) => {
            dispatch(loginUserSuccess(res));
            history.push('/')})
          .catch(err => {
              dispatch({
                  type: GET_ERRORS,
                  payload: err.response.data
              });
          });
}

export const loginUserSuccess = (data) => {
  return {
    type: SIGN_IN,
    payload: {
      email: data.email,
      password: data.password
    }
  }
};

export const resetPassword = ({ email, password }) => {
  return (dispatch) => {
    return resetPass({ email, password })
      .then(response => {
        dispatch(resetPasswordSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const resetPasswordSuccess = (data) => {
  return {
    type: RESET_PASS,
    payload: {
      email: data.email,
      password: data.password
    }
  }
};