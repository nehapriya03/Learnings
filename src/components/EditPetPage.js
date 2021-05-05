import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { GetPetByIdAPI } from "../apis/Pet";
import "../css/IndividualPage.css";

const EditReactPage = (props) => {
  const { user } = props;
  const [userPet, setUserPet] = useState({});
  const [userPetAfterUpdate, setUserPetAfterUpdate] = useState({});
  const [fetchMessage, setFetchMessage] = useState({});

  const history = useHistory();
  const { userId: pathUserId, petId: pathPetId } = useParams();

  useEffect(() => {
    if (user === null || pathUserId !== user.userId) {
      history.push("/");
    } else {
      const fetchPet = async () => {
        await GetPetByIdAPI(pathPetId)
          .then(({ data: foundPet }) => {
            setUserPet(foundPet);
            setUserPetAfterUpdate(foundPet);
            setFetchMessage({
              success: true,
              message: `Pet with ID: ${pathPetId} was successfully found!`,
            });
          })
          .catch((error) => {
            if (error.response.stats === 404) {
              setFetchMessage({
                success: false,
                message: `Pet with ID: ${pathPetId} was not found.`,
              });
            }
          });
      };
      fetchPet();
    }
  }, [history, pathPetId, pathUserId, user]);

  let cityArray = [
    "New Delhi",
    "Kolkata",
    "Bengaluru",
    "Pune",
    "Mumbai",
    "Chennai",
    "Hyderabad",
    "Indore",
    "Patna",
    "Ranchi",
    "Lucknow",
    "Prayagraj",
    "Ahmedabad",
    "Agra",
    "Kanpur",
    "Jamshedpur",
    "Srinagar",
    "Gandhinagar",
    "Thiruvananthapuram",
  ];

  const renderCityOptions = () => {
    let array = [];
    for (let i = 0; i < cityArray.length; i++) {
      array.push(
        <option key={i} value={cityArray[i]}>
          {cityArray[i]}
        </option>
      );
    }
    return array;
  };

  const renderEditPage = () => {
    return (
      <>
        <div className={"uk-section hero-section"}>
          <div className={"uk-container"}>
            <h1 className={"hero-heading-text"}>{userPet.name}</h1>
          </div>
        </div>
        <div className={"section"}>
          <div className={"uk-grid"}>
            <div className={"uk-width-2-5@l"}>
              <div className={"pet-image-box"}>
                <img
                  src={`/${userPetAfterUpdate.picturePath}`}
                  alt={userPetAfterUpdate.name}
                />
              </div>
              <div
                className={"uk-position-relative uk-visible-toggle uk-light"}
                tabIndex={"-1"}
                uk-slider={"center: true"}
              >
                <ul className={"uk-slider-items uk-grid"}>
                  {(() => {
                    let array = [];
                    for (let i = 0; i < 12; i++) {
                      array.push(
                        <li key={i} className={"uk-width-3-4"}>
                          <div className={"uk-panel"}>
                            <img
                              className={
                                userPetAfterUpdate.picturePath ===
                                `pet-${i + 1}.jpg`
                                  ? "pet-image"
                                  : ""
                              }
                              src={`/pet-${i + 1}.jpg`}
                              alt={"Pet"}
                              onClick={(e) =>
                                setUserPetAfterUpdate({
                                  ...userPetAfterUpdate,
                                  picturePath: `pet-${i + 1}.jpg`,
                                })
                              }
                            />
                          </div>
                        </li>
                      );
                    }
                    return array;
                  })()}
                </ul>
                <div
                  class="uk-position-center-left uk-position-small uk-hidden-hover"
                  uk-slidenav-previous={""}
                  uk-slider-item="previous"
                />
                <diva
                  class="uk-position-center-right uk-position-small uk-hidden-hover"
                  uk-slidenav-next={""}
                  uk-slider-item="next"
                />
              </div>
            </div>
            <div className={"uk-width-3-5@l"}>2</div>
          </div>
        </div>
      </>
    );
  };

  const renderContent = () => {
    if (
      Object.keys(userPet).length > 0 &&
      Object.keys(userPetAfterUpdate).length > 0 &&
      fetchMessage.success
    ) {
      return renderEditPage();
    } else if (Object.keys(fetchMessage).length > 0 && !fetchMessage.success) {
      return <h1>Not found</h1>;
    } else {
      return <span uk-spinner={"ratio: 4.5"} />;
    }
  };

  return renderContent();
};

export default EditReactPage;
