import { SIGN_UP } from './types';
import { SIGN_IN } from './types';
import { signUp } from '../api/index';
import { signIn } from '../api/index';

export const registerUser = ({ name, email, password }) => {
  return (dispatch) => {
    return signUp({ name, email, password })
      .then(response => {
        dispatch(registerUserSuccess(response.data))
      })
      .then(response => {
        dispatch(response.message)
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const registerUserSuccess = (data) => {
  return {
    type: SIGN_UP,
    payload: {
      name: data.name,
      email: data.email,
      password: data.password
    }
  }
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    return signIn({ email, password })
      .then(response => {
        dispatch(loginUserSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const loginUserSuccess = (data) => {
  return {
    type: SIGN_IN,
    payload: {
      email: data.email,
      password: data.password
    }
  }
};
