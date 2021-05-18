import Axios from "axios";

export const AddDoctorAPI = async (doctor) => {
  return Axios.post("/doctor", doctor);
};

export const GetAllDoctors = async () => {
  return Axios.get("/doctor/get/all");
};

export const GetDoctorById = async (doctorId) => {
  return Axios.get(`/doctor/${doctorId}`);
};

export const GetDoctorsByAvgReview = async (locationArray, doctorId) => {
  return Axios.post("/doctor/get/review", { locationArray, doctorId });
};

export const UpdateDoctorById = async (doctorId, doctorAfterUpdate) => {
  return Axios.put(`/doctor/${doctorId}`, doctorAfterUpdate);
};
