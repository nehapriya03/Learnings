import React, { useEffect, useState } from "react";
import { GetDoctorById } from "../apis/Doctor";

const DoctorPage = (props) => {
  const { doctorId } = props.match.params;
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const fetchDoctor = async (doctorId) => {
      await GetDoctorById(doctorId).then(({ data: foundDoctor }) => {
        setDoctor(foundDoctor);
      });
    };

    if (props.location.state === undefined) {
      fetchDoctor(doctorId);
    } else {
      let { tempDoctor } = props.location.state;
      setDoctor(tempDoctor);
    }
  }, [doctorId, props.location]);

  return (
    <h1>{doctor === null ? "Loading..." : `Doctor: ${doctor.firstName}`}</h1>
  );
};

export default DoctorPage;
