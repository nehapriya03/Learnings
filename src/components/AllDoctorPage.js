import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/AllPage.css";
import { GetAllDoctors } from "../apis/Doctor";

const AllDoctorPage = () => {
  const [doctorList, setDoctorList] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      await GetAllDoctors().then(({ data: foundDoctors }) => {
        setDoctorList(foundDoctors);
      });
    };

    fetchDoctors();
  }, []);

  const renderDoctorCards = () => {
    if (doctorList.length === 0) {
      return <h1>No Veterinary Doctors have registered yet!</h1>;
    }
    return doctorList.map((doctor) => {
      return (
        <div key={doctor.doctorId}>
          <div className={"uk-card uk-card-default uk-card-hover"}>
            <div className={"uk-card-media-top"}>
              <img
                src={`/${doctor.image}`}
                alt={`Veterinary Doctor: ${doctor.firstName} ${doctor.lastName}`}
                title={`Veterinary Doctor: ${doctor.firstName} ${doctor.lastName}`}
              />
            </div>
            <div className={"uk-card-body card-body"}>
              <h3 className={"uk-card-title"}>
                Dr. {doctor.firstName} {doctor.lastName}
              </h3>
              <p>{doctor.about}</p>
              <div className={"button-box"}>
                <Link
                  to={{
                    pathname: `/doctor/${doctor.doctorId}`,
                    state: {
                      tempDoctor: doctor,
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
          <h1 className={"hero-heading-text"}>Veterinary Doctors</h1>
        </div>
      </div>

      <div uk-grid={""} className={"section"}>
        <div className={"uk-width-1-4@l"}>1</div>
        <div className={"uk-width-3-4@l"}>
          <div className={"uk-child-width-1-3@m uk-grid-match"} uk-grid={""}>
            {renderDoctorCards()}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllDoctorPage;
