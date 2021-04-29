import React, { useState } from "react";
import { useHistory } from "react-router";
import { AddDoctorAPI } from "../apis/Doctor";
import { UpdateUserById } from "../apis/User";

const DoctorRegistrationForm = (props) => {
  const { user, setUser, setFormType } = props;
  let userNameArray = user === null ? null : user.name.split(" ");

  const [firstName, setFirstName] = useState(
    userNameArray === null ? "" : userNameArray[0]
  );
  const [lastName, setLastName] = useState(
    userNameArray === null ? "" : userNameArray[1]
  );
  const [location, setLocation] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [charge, setCharge] = useState("");
  const [chargeDuration, setChargeDuration] = useState("");
  const [about, setAbout] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [picturePath, setPicturePath] = useState("");

  const history = useHistory();

  const handleSubmitClick = async (e) => {
    if (
      firstName === "" ||
      lastName === "" ||
      location === "" ||
      specialty === "" ||
      charge === "" ||
      about === "" ||
      picturePath === ""
    ) {
      setErrorMessage("Please fill all required fields.");
    }
    e.preventDefault();
    let doctor = {
      firstName,
      lastName,
      location,
      specialty,
      charge,
      chargeDuration,
      about,
      picturePath,
    };
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    await AddDoctorAPI(doctor)
      .then(async ({ data: createdDoctor }) => {
        loggedInUser = { ...loggedInUser, targetUser: createdDoctor };
        await UpdateUserById(
          user.userId,
          {
            ...user,
            targetUser: "Doctor",
            targetUserId: createdDoctor.doctorId,
          },
          loggedInUser.token
        )
          .then(({ data: updatedUser }) => {
            loggedInUser = { ...loggedInUser, user: updatedUser };
            setUser(updatedUser);
          })
          .catch((error) => {
            console.error("Could not update user!", error);
          });
      })
      .catch((error) => {
        console.error("Could not create doctor", error);
      });
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    history.push("/");
  };

  const renderDoctorImages = () => {
    let array = [];
    for (let i = 0; i < 6; i++) {
      array.push(
        <div>
          <img
            src={`/dr-${i + 1}.jpg`}
            alt={"DR"}
            className={
              picturePath === `dr-${i + 1}.jpg`
                ? "type-image selected"
                : "type-image"
            }
            onClick={(e) => setPicturePath(`dr-${i + 1}.jpg`)}
          />
        </div>
      );
    }
    return array;
  };

  return (
    <>
      <div className={"login-form"}>
        <h1 className={"login-text"}>Pets would love our new vet.</h1>
        <h4 className={"radio-select"}>
          Please provide your additional details:
        </h4>
        <div className={"uk-margin"}>
          <input
            className={"uk-input uk-form-width-large"}
            type={"text"}
            placeholder={"Enter First Name"}
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </div>
        <div className={"uk-margin"}>
          <input
            className={"uk-input uk-form-width-large"}
            type={"text"}
            placeholder={"Enter Last Name"}
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
        <div className={"uk-margin"}>
          <input
            className={"uk-input uk-form-width-large"}
            type={"text"}
            placeholder={"Enter Location"}
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />
        </div>
        <div className={"uk-margin"}>
          <input
            className={"uk-input uk-form-width-large"}
            type={"text"}
            placeholder={"Enter Specialty"}
            onChange={(e) => setSpecialty(e.target.value)}
            value={specialty}
          />
        </div>
        <div className={"uk-margin"}>
          <input
            className={"uk-input uk-form-width-large"}
            type={"number"}
            placeholder={"Whats your charge"}
            onChange={(e) => setCharge(e.target.value)}
            value={charge}
          />
        </div>
        <div className={"uk-margin"}>
          <input
            className={"uk-input uk-form-width-large"}
            type={"text"}
            placeholder={"Charge Duration"}
            onChange={(e) => setChargeDuration(e.target.value)}
            value={chargeDuration}
          />
        </div>
        <div class="uk-margin">
          <textarea
            className={"uk-textarea  uk-form-width-large"}
            rows={"5"}
            placeholder={"About Yourself"}
            onChange={(e) => setAbout(e.target.value)}
            value={about}
          />
        </div>
        <div>
          <h4 className={"radio-select"}>Choose your Image:</h4>
          <div
            class="uk-grid-match uk-child-width-expand@s uk-text-center"
            uk-grid={""}
          >
            {renderDoctorImages()}
          </div>
        </div>
        <h4 className={"signup-mssg"}>
          Changed your mind? {/* eslint-disable-next-line */}
          <a className={"signup-link"} onClick={() => setFormType("User")}>
            Go Back
          </a>
        </h4>
        <div className={"uk-margin"}>
          <button
            className={"login-button"}
            onClick={(e) => handleSubmitClick(e)}
          >
            Register
          </button>
        </div>
        <h5 className={"error-mssg"}>{errorMessage}</h5>
      </div>
    </>
  );
};

export default DoctorRegistrationForm;
