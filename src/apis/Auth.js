import Axios from "axios";

export const LoginAPI = async (email, password) => {
  return Axios.post("/login", {
    email,
    password,
  });
};

export const SignUpAPI = async (user) => {
  return Axios.post("/signup", user);
};
