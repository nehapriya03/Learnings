import Axios from "axios";

export const AddNGOAPI = async (ngo) => {
  return Axios.post("/ngo", ngo);
};

export const GetNGOByIdAPI = async (ngoId) => {
  return Axios.get(`/ngo/${ngoId}`);
};

export const GetNGOsByAvgReviewAPI = async (locationArray, ngoId) => {
  return Axios.post("/ngo/get/review", { locationArray, ngoId });
};

export const UpdateNGOByIdAPI = async (ngoId, ngoAfterUpdate) => {
  return Axios.put(`/ngo/${ngoId}`, ngoAfterUpdate);
};
