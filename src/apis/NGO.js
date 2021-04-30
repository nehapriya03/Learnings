import Axios from "axios";

export const AddNGOAPI = async (ngo) => {
  return await Axios.post("/ngo", ngo);
};

export const GetNGOsByAvgReview = async (locationArray, ngoId) => {
  return await Axios.post("/ngo/get/review", { locationArray, ngoId });
};
