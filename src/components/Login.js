import React, { useState } from "react";
import { LoginAPI } from "../apis/Login";
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
    LoginAPI(email, password)
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
        <h1 className={"login-text"}>Login to Philozooic</h1>
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
