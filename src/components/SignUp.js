import React, { useRef, useState } from "react";
import { SignUpAPI } from "../apis/Auth";
import { useHistory } from "react-router-dom";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userType, setUserType] = useState("");
  const [gender, setGender] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const buttonRef = useRef(null);
  const history = useHistory();

  const { setUser } = props;

  let isUser = userType !== "" && userType === "User";

  const handleFirstClick = (e) => {
    e.preventDefault();
    if (isUser) {
      SignUpAPI(email, name, password, phoneNumber, userType, gender)
        .then((data) => {
          localStorage.setItem("loggedInUser", JSON.stringify(data));
          setUser(data.user);
          history.push("/");
        })
        .catch((error) => {
          console.error(error.response.data);
          setErrorMessage(error.response.data);
        });
    }
  };

  const buttonText = () => {
    if (!isUser) {
      return "Next";
    }
    return "SignUp";
  };

  return (
    <div>
      <form>
        <input
          type={"text"}
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder={"Enter Name"}
        />
        <input
          type={"email"}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder={"Enter email"}
        />
        <input
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder={"Enter password"}
        />
        <input
          type={"password"}
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          placeholder={"Re-enter password"}
        />
        <input
          type={"number"}
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
          placeholder={"Phone Number"}
        />
        <div onChange={(e) => setUserType(e.target.value)}>
          <label>Doctor</label>
          <input type={"radio"} value={"Doctor"} name={"userType"} />
          <label>Caretaker</label>
          <input type={"radio"} value={"Caretaker"} name={"userType"} />
          <label>NGO</label>
          <input type={"radio"} value={"NGO"} name={"userType"} />
          <label>User</label>
          <input type={"radio"} value={"User"} name={"userType"} />
        </div>
        <div onChange={(e) => setGender(e.target.vale)}>
          <label>Male</label>
          <input type={"radio"} value={"Male"} />
          <label>Female</label>
          <input type={"radio"} value={"Female"} />
        </div>
        <button ref={buttonRef} onClick={(e) => handleFirstClick(e)}>
          {buttonText()}
        </button>
        <small>{errorMessage}</small>
      </form>
    </div>
  );
};

export default SignUp;
