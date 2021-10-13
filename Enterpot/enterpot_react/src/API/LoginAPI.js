import Axios from "axios";
import { BASE_URL } from "constants";

export const LoginAPI = async (email, password) => {
  return Axios.post(`${BASE_URL}/`, {
    email,
    password,
  });
};
