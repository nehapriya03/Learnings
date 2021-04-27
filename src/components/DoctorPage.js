import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import "../css/IndividualPage.css";
import { GetDoctorsByAvgReview } from "../apis/Doctor";
import { GetUserByTargetUserIdAPI } from "../apis/User";
import { GetReviewsWithUserDataAPI } from "../apis/Review";

const DoctorPage = (props) => {
  const { doctorId } = props.match.params;
  const [doctor, setDoctor] = useState(null);
  const [doctorUser, setDoctorUser] = useState(null);
  const [doctorReviews, setDoctorReviews] = useState([]);

  useEffect(() => {
    if (typeof props.location.state === "undefined") {
      fetchDoctor(doctorId);
    } else {
      let { tempDoctor } = props.location.state;
      setDoctor(tempDoctor);
    }
    fetchDoctorUser(doctorId);
    fetchDoctorReviews(doctorId);
  }, [doctorId, props.location]);

  const numberFormatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  const dateFormatter = new Intl.DateTimeFormat("en-In", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const fetchDoctor = async (doctorID) => {
    await GetDoctorsByAvgReview([], doctorID)
      .then(({ data: foundDoctor }) => {
        setDoctor(foundDoctor);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchDoctorUser = async (targetUserId) => {
    await GetUserByTargetUserIdAPI(targetUserId)
      .then(({ data: foundUser }) => {
        setDoctorUser(foundUser);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchDoctorReviews = async (reviewOfId) => {
    await GetReviewsWithUserDataAPI(reviewOfId, "Doctor")
      .then(({ data: foundReviews }) => {
        setDoctorReviews(foundReviews);
      })
      .catch((error) => {
        console.error(error);
        setDoctorReviews([]);
      });
  };

  const renderReviews = () => {
    return doctorReviews.map((doctorReview) => {
      return (
        <div className={"uk-card uk-card-default"}>
          <div className={"uk-card-header"}>
            <div className={"uk-grid-small uk-flex-middle"} uk-grid={""}>
              <div className={"uk-width-auto"}>
                <img
                  className={"uk-border-circle"}
                  width="40"
                  height="40"
                  alt={`${
                    typeof doctorReview.reviewerData[0] !== "undefined"
                      ? doctorReview.reviewerData[0].name
                      : "Test name"
                  }
                  `}
                  title={`${
                    typeof doctorReview.reviewerData[0] !== "undefined"
                      ? doctorReview.reviewerData[0].name
                      : "Test name"
                  }
                  `}
                  src={"https://getuikit.com/docs/images/avatar.jpg"}
                />
              </div>
              <div className={"uk-width-expand"}>
                <div className={"review-star-div"}>
                  <StarRatings
                    rating={Number(doctorReview.rating)}
                    starDimension={"17px"}
                  />
                </div>
                <h3
                  className={
                    "uk-card-title uk-margin-remove-bottom reviewer-name"
                  }
                >
                  {typeof doctorReview.reviewerData[0] !== "undefined"
                    ? doctorReview.reviewerData[0].name
                    : "Test name"}
                </h3>
                <p className={"uk-text-meta uk-margin-remove-top"}>
                  <time>{dateFormatter.format(doctorReview.dateCreated)}</time>
                </p>
              </div>
            </div>
          </div>
          <div class={"uk-card-body review-body"}>
            <p>{doctorReview.reviewString}</p>
          </div>
        </div>
      );
    });
  };

  const renderDoctorContent = () => {
    if (doctor === null || doctorUser === null) {
      return <span uk-spinner={"ratio: 4.5"} />;
    }
    return (
      <div uk-grid={""} className={"section"}>
        <div className={"uk-width-2-5@l"}>
          <img
            src={`/${doctor.image}`}
            alt={`Veterinary Doctor: ${doctor.firstName} ${doctor.lastName}`}
            title={`Veterinary Doctor: ${doctor.firstName} ${doctor.lastName}`}
            className={"profile-pic"}
          />
          <div className={"info-contact"}>
            <h3>Contact details:</h3>
            <div>
              <span>
                <span uk-icon={"icon: mail; ratio: 2"} />
                &nbsp; &nbsp;
                <a href={`mailto:${doctorUser.email}`}>{doctorUser.email}</a>
              </span>
              <br />
              <span>
                <span uk-icon={"icon: receiver; ratio: 2"} />
                &nbsp; &nbsp;
                <a href={`tel:${doctorUser.phoneNumber}`}>
                  {doctorUser.phoneNumber}
                </a>
              </span>
            </div>
            <hr />
          </div>
        </div>
        <div className={"uk-width-3-5@l"}>
          <h1 className={"info-name"}>
            Dr. {doctor.firstName} {doctor.lastName}{" "}
            {doctor.reviewAvg > 4 && (
              <span className={"uk-label label"}>Highly Rated</span>
            )}
          </h1>
          <h3 className={"info-charge"}>
            {numberFormatter.format(doctor.charge)}/{doctor.chargeDuration}
          </h3>
          <div className={"info-ratings"}>
            <StarRatings rating={Number(doctor.reviewAvg)} />
          </div>
          <div>
            <h5 className={"info-ratings-num"}>
              {doctor.reviewAvg} ({doctor.reviewCount} review
              {(doctor.reviewCount === 0 || doctor.reviewCount > 1) && "s"})
            </h5>
          </div>
          <hr />
          <h4>About Dr. {doctor.firstName}:</h4>
          <p>{doctor.about}</p>
          <hr />
          <h4>Reviews:</h4>
          {renderReviews()}
        </div>
      </div>
    );
  };

  return renderDoctorContent();
};

export default DoctorPage;
