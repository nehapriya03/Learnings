import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const history = useHistory();

  const { setUser } = props;

  const onFormSubmit = async (event) => {
    event.preventDefault();
    await Axios.post("/login", {
      email,
      password,
    })
      .then((response) => {
        localStorage.setItem("loggedInUser", JSON.stringify(response.data));
        setUser(response.data.user);
        history.push("/");
      })
      .catch((error) => {
        console.error(error.response.data);
      });
  };

  return (
    <div>
      <form>
        <input
          type={"email"}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          placeholder={"Enter your email"}
          value={email}
        />
        <input
          type={"password"}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          placeholder={"Enter your password"}
          value={password}
        />
        <button
          onClick={(event) => {
            onFormSubmit(event);
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
