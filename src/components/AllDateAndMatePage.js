import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/AllPage.css";
import { GetPetsByAvgReviewsAPI } from "../apis/Pet";

let locationSet = new Set();
let locationToSearchSet = new Set();

const AllDateAndMatePage = () => {
  const [petList, setPetList] = useState([]);
  const [showFilter, setShowFilter] = useState(true);

  const fetchPetsByLocation = async (locationArray) => {
    await GetPetsByAvgReviewsAPI(locationArray)
      .then(({ data: foundDoctors }) => {
        setPetList(foundDoctors);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const setLocationToSearchSet = (e) => {
    let { value, checked } = e.target;
    if (checked) {
      locationToSearchSet.add(value);
      console.log(locationToSearchSet);
      fetchPetsByLocation([...locationToSearchSet]);
    } else if (locationToSearchSet.has(value)) {
      locationToSearchSet.delete(value);
      fetchPetsByLocation([...locationToSearchSet]);
    }
  };

  const numberFormatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  useEffect(() => {
    fetchPetsByLocation([]);
  }, []);

  const renderLocationCheckboxes = () => {
    return [...locationSet].map((location) => {
      return (
        <div>
          <label>
            <input
              className={"uk-checkbox"}
              type={"checkbox"}
              value={location}
              onChange={(e) => setLocationToSearchSet(e)}
            />
            {` ${location}`}
          </label>
        </div>
      );
    });
  };

  const renderPetCards = () => {
    if (petList.length === 0) {
      return <span uk-spinner={"ratio: 4.5"} />;
    }
    return petList.map((pet) => {
      locationSet.add(pet.location);
      return (
        <div key={pet.petId}>
          <div className={"uk-card uk-card-default uk-card-hover"}>
            {pet.reviewAvg > 4 && (
              <div className={"uk-card-badge uk-label label"}>Highly Rated</div>
            )}
            <div className={"uk-card-media-top"}>
              <img
                className={"card-image"}
                src={`/${pet.image}`}
                alt={`Pet: ${pet.animalType} ${pet.breed}`}
                title={`Pet: ${pet.animalType} ${pet.breed}`}
              />
            </div>
            <div className={"uk-card-body card-body"}>
              <h3 className={"uk-card-title name"}>
                {pet.animalType} ({pet.breed})
              </h3>
              {/* <h4 className={"charge-box"}>
                {numberFormatter.format(pet.charge)}/{pet.chargeDuration}
              </h4> */}
              <h6 className={"miscellaneous-info"}>Location: {pet.location}</h6>
              <h6 className={"miscellaneous-info"}>
                {pet.mateStatus ? "Available to Mate" : "Unavailble to Mate"}
              </h6>
              <small className={"review-box"}>
                {pet.reviewAvg} ({pet.reviewCount} review
                {(pet.reviewCount === 0 || pet.reviewCount > 1) && "s"})
              </small>
              {/* <p className={"about-box"}>{pet.about}</p> */}
              <div className={"button-box"}>
                <Link
                  to={{
                    pathname: `/pet/${pet.petId}`,
                    state: {
                      tempPet: pet,
                    },
                  }}
                >
                  <button className={"section-button"}>Visit</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div className={"uk-section hero-section"}>
        <div className={"uk-container"}>
          <h1 className={"hero-heading-text"}>Pets for date</h1>
        </div>
      </div>

      <div uk-grid={""} className={"section"}>
        <div className={"uk-width-1-4@l"}>
          <div className={"location-filter-section"}>
            <h6>
              Filter by location:
              <span
                uk-icon={"icon: chevron-down"}
                className={"collapse-icon"}
                onClick={(e) => setShowFilter(!showFilter)}
                style={showFilter ? { transform: "rotate(180deg)" } : {}}
              />
            </h6>
            {showFilter && renderLocationCheckboxes()}
          </div>
        </div>
        <div className={"uk-width-3-4@l all-page-card-section"}>
          <div className={"uk-child-width-1-3@l uk-grid-match"} uk-grid={""}>
            {renderPetCards()}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllDateAndMatePage;
