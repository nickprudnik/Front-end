import { API_URL } from '../config';
import axios from 'axios';

export const signUp = ({ name, email, password }) => {
    return axios.post(`${API_URL}/user/sign_up`, { name, email, password });
};

export const signIn = ({ email, password }) => {
    return axios.post(`${API_URL}/user/sign_in`, { email, password });
};

export const resetPass = ({ email, password }) => {
    return axios.post(`${API_URL}/user/reset_pass`, { email, password });
};