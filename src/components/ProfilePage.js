import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { GetUserById } from "../apis/User";
// import { GetDoctorById } from "../apis/Doctor";
// import { GetCaretakerByIdAPI } from "../apis/Caretaker";
// import { GetNGOByIdAPI } from "../apis/NGO";
import "../css/IndividualPage.css";
import UserProfileSection from "./UserProfileSection";

const ProfilePage = (props) => {
  const { userId } = props.match.params;
  const [user, setUser] = useState(null);
  // const [targetUser, setTargetUser] = useState(null);
  const [userType, setUserType] = useState(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const history = useHistory();

  useEffect(() => {
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser === null || loggedInUser.user.userId !== userId) {
      history.push("/");
    } else {
      fetchUser(userId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, userId]);

  const fetchUser = async (userID) => {
    await GetUserById(userID)
      .then(({ data: foundUser }) => {
        setUser(foundUser);
        setUserType(foundUser.userType);
        // switch (foundUser.userType) {
        //   case "Doctor":
        //     console.log("Doctor");
        //     fetchDoctor(foundUser.targetUserId);
        //     break;
        //   case "Caretaker":
        //     console.log("Caretaker");
        //     fetchCaretaker(foundUser.targetUserId);
        //     break;
        //   case "NGO":
        //     console.log("NGO");
        //     fetchNGO(foundUser.targetUserId);
        //     break;
        //   default:
        //     console.log("Invalid User Type");
        //     break;
        // }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // const fetchDoctor = async (doctorId) => {
  //   await GetDoctorById(doctorId)
  //     .then(({ data: foundDoctor }) => {
  //       setTargetUser(foundDoctor);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  // const fetchCaretaker = async (caretakerId) => {
  //   await GetCaretakerByIdAPI(caretakerId)
  //     .then(({ data: foundCaretaker }) => {
  //       setTargetUser(foundCaretaker);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  // const fetchNGO = async (ngoId) => {
  //   await GetNGOByIdAPI(ngoId)
  //     .then(({ data: foundNGO }) => {
  //       setTargetUser(foundNGO);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  const renderImageGrid = () => {
    let array = [];
    for (let i = 0; i < 50; i++) {
      array.push(
        <img
          key={i}
          src={`/pp-${i + 1}.jpg`}
          alt={"PP"}
          className={
            "uk-border-circle choose-img"
            // picturePath === `pp-${i + 1}.jpg`
            //   ? "uk-border-circle photo-selected"
            //   : "uk-border-circle"
          }
          // onClick={(e) => setPicturePath(`pp-${i + 1}.jpg`)}
        />
      );
    }
    return array;
  };

  return user !== null && <UserProfileSection user={user} setUser={setUser} />;
};

export default ProfilePage;
