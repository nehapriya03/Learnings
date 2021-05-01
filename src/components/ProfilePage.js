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

  const renderUserContent = () => {
    if (user === null) {
      return <span uk-spinner={"ratio: 4.5"} />;
    } else {
      return (
        <>
          <div className={"uk-section hero-section"}>
            <div className={"uk-container"}>
              <h1 className={"hero-heading-text"}>{user.name}</h1>
            </div>
          </div>
          <div className={"section"}>
            <div uk-grid={""} className={"user-section"}>
              <div className={"uk-width-2-5@l"}>
                <div>
                  <img
                    src={`/${user?.picturePath}`}
                    alt={`User: ${user.name}`}
                    title={`User: ${user.name}`}
                  />
                  <span
                    uk-icon={"icon: pencil; ratio: 1"}
                    onClick={() => setIsImageModalOpen(true)}
                  />
                  {/* Test Area */}
                  <div id="myModal" class="modal" hidden={!isImageModalOpen}>
                    <div class="modal-content">
                      <span
                        class="close"
                        onClick={() => setIsImageModalOpen(false)}
                      >
                        &times;
                      </span>
                      <div className={"img-grid"}>{renderImageGrid()}</div>
                    </div>
                  </div>
                  {/* Test Area Ends */}
                </div>
              </div>
              <div className={"uk-width-3-5@l"}>
                <h4 className={"user-info-med"}>
                  Registered Email: &nbsp;
                  <span className={"user-email"}>{user.email}</span>
                </h4>
                <h4 className={"user-info-med"}>
                  Your User Id: &nbsp;
                  <span className={"user-email"}>{user.userId}</span>
                </h4>
                <form className={"user-form"}>
                  <div className={"uk-margin"}>
                    <label className={"uk-form-label"}>Name:</label>
                    <div className={"uk-form-controls"}>
                      <input
                        class={"uk-input"}
                        type={"text"}
                        placeholder={"Your name"}
                        value={user.name}
                      />
                    </div>
                  </div>
                  <div className={"uk-margin"}>
                    <label className={"uk-form-label"}>Phone Number:</label>
                    <div className={"uk-form-controls"}>
                      <input
                        class={"uk-input"}
                        type={"number"}
                        placeholder={"Your name"}
                        value={user.phoneNumber}
                      />
                    </div>
                  </div>
                  <div class="uk-margin">
                    <div class="uk-form-label">Gender:</div>
                    <div class="uk-form-controls">
                      <label>
                        <input class="uk-radio" type="radio" name="radio1" />
                        {" Male"}
                      </label>
                      <br />
                      <label>
                        <input class="uk-radio" type="radio" name="radio1" />
                        {" Female"}
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return <UserProfileSection user={user} setUser={setUser} />;
};

export default ProfilePage;
