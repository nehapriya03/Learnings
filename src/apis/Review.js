import Axios from "axios";

export const AddReviewApi = async (review) => {
  return await Axios.post("/review", review);
};

export const GetReviewsWithUserDataAPI = async (reviewOfId, reviewType) => {
  return await Axios.get("/review/with-user", {
    params: { reviewType, reviewOfId },
  });
};
