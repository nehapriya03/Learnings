import Axios from "axios";

export const AddDoctor = async (doctor) => {
  console.log(doctor);
  return await Axios.post("/doctor", doctor);
};
