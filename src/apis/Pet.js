import Axios from "axios";

export const GetPetsByAvgReviewsAPI = async (locationArray) => {
  return await Axios.post("/pet/get/review", { locationArray });
};
