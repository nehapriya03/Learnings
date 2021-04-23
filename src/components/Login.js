import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import "../css/Auth.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const { setUser } = props;

  const onFormSubmit = (event) => {
    event.preventDefault();
    Axios.post("/login", {
      email,
      password,
    })
      .then(({ data }) => {
        localStorage.setItem("loggedInUser", JSON.stringify(data));
        setUser(data.user);
        history.push("/");
      })
      .catch((error) => {
        console.error(error.response.data);
        setErrorMessage(error.response.data);
      });
  };

  return (
    <div className={"login-form"}>
      <form>
        <div className={"uk-margin"}>
          <input
            className={"uk-input uk-form-width-large"}
            type={"email"}
            placeholder={"Enter your email"}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
          />
        </div>
        <div className={"uk-margin"}>
          <input
            className={"uk-input uk-form-width-large"}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            type={"password"}
            placeholder={"Enter your password"}
            value={password}
          />
        </div>
        <div className={"uk-margin"}>
          <button
            className={"login-button"}
            onClick={(event) => {
              onFormSubmit(event);
            }}
          >
            Login
          </button>
        </div>
      </form>
      <h5 className={"error-mssg"}>{errorMessage}</h5>
    </div>
  );
};

export default Login;
