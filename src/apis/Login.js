import Axios from "axios";

export const LoginAPI = async (email, password) => {
  return await Axios.post("/login", {
    email,
    password,
  });
};
