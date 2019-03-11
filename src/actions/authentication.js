import { SIGN_UP, SIGN_IN, RESET_PASS, GET_ERRORS } from './types';
import { signUp, signIn, resetPass } from '../api/index';

// export const registerUser = ({ name, email, password }) => {
//   return (dispatch) => {
//     return signUp({ name, email, password })
//       .then(response => {
//         dispatch (registerUserSuccess(response));
//       })
//       .catch(error => {
//         dispatch({
//             type: GET_ERRORS,
//             payload: error.response.data.message
//         });
//       });
//   };
// };

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
          .then(res => dispatch(loginUserSuccess(res)))
          .catch(err => {
              dispatch({
                  type: GET_ERRORS,
                  payload: err.response.data
              });
          });
}

// export const loginUser = ({ email, password }) => {
//   return (dispatch) => {
//     return signIn({ email, password })
//       .then(response => {
//         dispatch(loginUserSuccess(response.data))
//       })
//       .catch(err => {
//         dispatch({
//             type: GET_ERRORS,
//             payload: err.response.data
//         });
//       });
//   };
// };

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