import React, { useState } from "react";
import { AddPetAPI } from "../apis/Pet";
import "../css/IndividualPage.css"

const AddPet = (props) => {
  const { user, userPetList, setUserPetList } = props;
  const [pet, setPet] = useState({ animalType: "Dog", location: "New Delhi" });

  const onSubmitClick = async (e) => {
    e.preventDefault();
    await AddPetAPI({ ...pet, ownerId: user.userId })
      .then(({ data: addedPet }) => {
        setUserPetList(...userPetList, addedPet);
      })
      .catch((error) => console.error(error));
  };

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

  return (
    <div className={"section"}>
      <h4 className={"pet-welcome-message"}>
        Tell your pet, we said hi &#128075;&#127997;
      </h4>
      <div uk-grid={""} className={"pet-card"}>
        <div className={"uk-width-2-5@l"}>
          <h4>Choose Image:</h4>
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
                            pet.picturePath === `pet-${i + 1}.jpg`
                              ? "pet-image"
                              : ""
                          }
                          src={`/pet-${i + 1}.jpg`}
                          alt={"Pet"}
                          onClick={(e) =>
                            setPet({ ...pet, picturePath: `pet-${i + 1}.jpg` })
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
        <div className={"uk-width-3-5@l"}>
          <form>
            <div className={"uk-margin"}>
              <label className={"uk-form-label"}>Pet Name:</label>
              <div className={"uk-form-controls"}>
                <input
                  className={"uk-input"}
                  type={"text"}
                  placeholder={"Pet Name"}
                  value={pet.name}
                  onChange={(e) => setPet({ ...pet, name: e.target.value })}
                />
              </div>
            </div>
            <div className={"uk-margin"}>
              <label className={"uk-form-label"}>
                Which animal is your pet?
              </label>
              <div className={"uk-form-controls"}>
                <select
                  className={"uk-select"}
                  onChange={(e) =>
                    setPet({ ...pet, animalType: e.target.value })
                  }
                  value={pet.animalType}
                >
                  <option value={"Dog"}>Dog</option>
                  <option value={"Cat"}>Cat</option>
                  <option value={"Bird"}>Bird</option>
                  <option value={"Rabbit"}>Rabbit</option>
                  <option value={"Other"}>Other</option>
                </select>
              </div>
            </div>
            <div className={"uk-margin"}>
              <label className={"uk-form-label"}>Pet Breed:</label>
              <div className={"uk-form-controls"}>
                <input
                  className={"uk-input"}
                  type={"text"}
                  placeholder={"Pet Breed"}
                  value={pet.breed}
                  onChange={(e) => setPet({ ...pet, breed: e.target.value })}
                />
              </div>
            </div>
            <div className={"uk-margin"}>
              <label className={"uk-form-label"}>Medical History</label>
              <div className={"uk-form-controls"}>
                <textarea
                  className={"uk-textarea"}
                  rows={"5"}
                  placeholder={"Medical History"}
                  value={pet.medicalHistory}
                  onChange={(e) =>
                    setPet({ ...pet, medicalHistory: e.target.value })
                  }
                />
              </div>
            </div>
            <div className={"uk-margin"}>
              <label className={"uk-form-label"}>Location:</label>
              <div className={"uk-form-controls"}>
                <select
                  className={"uk-select"}
                  value={pet.location}
                  onChange={(e) => setPet({ ...pet, location: e.target.value })}
                >
                  {renderCityOptions()}
                </select>
              </div>
            </div>
            <div className={"uk-margin"}>
              <div className={"uk-form-label"}>Is ready to mate/date?</div>
              <div
                className={"uk-form-controls"}
                onClick={(e) => setPet({ ...pet, mateStatus: e.target.value })}
              >
                <label>
                  <input
                    className={"uk-radio"}
                    type={"radio"}
                    name={"mateStatus"}
                    value={true}
                  />
                  {" Yes"}
                </label>
                <br />
                <label>
                  <input
                    class={"uk-radio"}
                    type={"radio"}
                    name={"mateStatus"}
                    value={false}
                  />
                  {" No"}
                </label>
              </div>
            </div>
            <div className={"uk-margin"}>
              <div className={"uk-form-label"}>Gender:</div>
              <div
                className={"uk-form-controls"}
                onClick={(e) => setPet({ ...pet, gender: e.target.value })}
              >
                <label>
                  <input
                    className={"uk-radio"}
                    type={"radio"}
                    name={"gender"}
                    value={"Male"}
                  />
                  {" Male"}
                </label>
                <br />
                <label>
                  <input
                    class={"uk-radio"}
                    type={"radio"}
                    name={"gender"}
                    value={"Female"}
                  />
                  {" Female"}
                </label>
              </div>
            </div>
            <div className={"uk-margin"}>
              <button
                className={"submit-button"}
                onClick={(e) => onSubmitClick(e)}
              >
                Add Pet
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPet;
