import axios from "axios";

const API = "http://localhost:4000/api";

export const registerRequest = async (user) => {
  const res = await axios.post(`${API}/register`, user);
  return res;
};
export const loginRequest = (user) => {
  const res = axios.post(`${API}/login`, user);
  return res;
};

export const logoutRequest = (user) => axios.post(`${API}/logout`);
