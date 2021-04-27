import Axios from "axios";

export const AddDoctorAPI = async (doctor) => {
  return await Axios.post("/doctor", doctor);
};

export const GetAllDoctors = async () => {
  return await Axios.get("/doctor/get/all");
};

export const GetDoctorById = async (doctorId) => {
  return await Axios.get(`/doctor/${doctorId}`);
};

export const GetDoctorsByAvgReview = async (locationArray) => {
  return await Axios.post("/doctor/get/review", { locationArray });
};
