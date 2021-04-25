import React, { useState } from "react";
import { useHistory } from "react-router";
import { AddDoctor } from "../apis/Doctor";
import { UpdateUserById } from "../apis/User";

const DoctorRegistrationForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [charge, setCharge] = useState("");
  const [chargeDuration, setChargeDuration] = useState("");
  const [about, setAbout] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const { user, setUser } = props;

  const handleSubmitClick = async (e) => {
    if (
      firstName === "" ||
      lastName === "" ||
      location === "" ||
      specialty === "" ||
      charge === "" ||
      about === ""
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
    };
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    await AddDoctor(doctor)
      .then(({ data: createdDoctor }) => {
        loggedInUser = { ...loggedInUser, targetUser: createdDoctor };
        UpdateUserById(
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

  return (
    <>
      <input
        type={"text"}
        placeholder={"Enter First Name"}
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
      />
      <input
        type={"text"}
        placeholder={"Enter Last Name"}
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
      />
      <input
        type={"text"}
        placeholder={"Enter Location"}
        onChange={(e) => setLocation(e.target.value)}
        value={location}
      />
      <input
        type={"text"}
        placeholder={"Enter Specialty"}
        onChange={(e) => setSpecialty(e.target.value)}
        value={specialty}
      />
      <input
        type={"number"}
        placeholder={"Whats your charge"}
        onChange={(e) => setCharge(e.target.value)}
        value={charge}
      />
      <input
        type={"text"}
        placeholder={"Charge Duration"}
        onChange={(e) => setChargeDuration(e.target.value)}
        value={chargeDuration}
      />
      <input
        type={"text"}
        placeholder={"About Yourself"}
        onChange={(e) => setAbout(e.target.value)}
        value={about}
      />
      <button onClick={(e) => handleSubmitClick(e)}>Submit</button>
    </>
  );
};

export default DoctorRegistrationForm;
