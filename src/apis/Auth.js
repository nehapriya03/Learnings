import Axios from "axios";

export const LoginAPI = async (email, password) => {
  return await Axios.post("/login", {
    email,
    password,
  });
};

export const SignUpAPI = async (
  email,
  name,
  password,
  phoneNumber,
  userType,
  gender
) => {
  return await Axios.post("/signup", {
    email,
    name,
    password,
    phoneNumber,
    userType,
    gender,
  });
};
