import React, { useEffect, useState } from "react";
import { SignUpAPI } from "../apis/Auth";
import { useHistory } from "react-router-dom";
import DoctorRegistrationForm from "./DoctorRegistration";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userType, setUserType] = useState("");
  const [gender, setGender] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formType, setFormType] = useState("");
  const history = useHistory();

  const { user, setUser } = props;

  useEffect(() => {
    if (user !== null) {
      if (user.userType === "User") {
        history.push("/");
      } else {
        setFormType(user.userType);
      }
    }
  }, [user]);

  const handleClick = async (e) => {
    e.preventDefault();
    if (
      email === "" ||
      name === "" ||
      password === "" ||
      confirmPassword === "" ||
      phoneNumber === "" ||
      userType === "" ||
      gender === ""
    ) {
      setErrorMessage("Please fill up all mandatory fields");
    } else if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
    } else {
      let user = {
        email,
        name,
        password,
        confirmPassword,
        phoneNumber,
        userType,
        gender,
      };
      await SignUpAPI(user)
        .then(({ data }) => {
          localStorage.setItem("loggedInUser", JSON.stringify(data));
          setUser(data.user);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
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
      <div onChange={(e) => setGender(e.target.value)}>
        <label>Male</label>
        <input type={"radio"} value={"Male"} name={"gender"} />
        <label>Female</label>
        <input type={"radio"} value={"Female"} name={"gender"} />
      </div>
      <button onClick={(e) => handleClick(e)}>
        {userType === "" || userType === "User" ? "SignUp" : "Next"}
      </button>
      <small>{errorMessage}</small>
      {formType === "Doctor" ? (
        <DoctorRegistrationForm user={user} setUser={setUser} />
      ) : null}
    </form>
  );
};

export default SignUp;
