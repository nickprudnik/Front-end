import { API_URL } from '../config';
import axios from 'axios';

export const signUp = ({ name, email, password }) => {
    return axios.post(`${API_URL}/user/sign_up`, { name, email, password });
};