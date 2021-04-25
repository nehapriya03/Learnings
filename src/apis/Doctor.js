import Axios from "axios";

export const AddDoctorAPI = async (doctor) => {
  console.log(doctor);
  return await Axios.post("/doctor", doctor);
};
