import { API_URL } from "../config";
import axios from "axios";

export const signUp = ({ name, email, password }) => {
  return axios.post(`${API_URL}/user/sign_up`, { name, email, password });
};

export const signIn = ({ email, password }) => {
  return axios.post(`${API_URL}/user/sign_in`, { email, password });
};

export const resetPass = ({ email, password }) => {
  return axios.post(`${API_URL}/user/reset_pass`, { email, password });
};

export const getNews = () => {
  return axios.get(`${API_URL}/latest_news`);
};

export const getAirports = () => {
  return axios.get(`${API_URL}/avia/get_airports`);
};

export const getTickets = () => {
  return axios.get(`${API_URL}/search-request`);
};

export const getBestDeals = () => {
  return axios.get(`${API_URL}/search_bestdeals`);
};

export const getPlainShema = () => {
  return axios.get(`${API_URL}/planeShemes`);
};

export const getLuggage = () => {
  return axios.get(`${API_URL}/luggage`);
};

export const getOrders = () => {
  return axios.get(`${API_URL}/history_order`);
};
