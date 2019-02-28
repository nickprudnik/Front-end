import { SIGN_UP } from './types';
import { signUp } from '../api/index';

export const createPost = ({ name, email, password }) => {
  return (dispatch) => {
    return signUp({ name, email, password })
      .then(response => {
        dispatch(createPostSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createPostSuccess =  (data) => {
  return {
    type: SIGN_UP,
    payload: {
      name: data.name,
      email: data.password,
      password: data.password
    }
  }
};
