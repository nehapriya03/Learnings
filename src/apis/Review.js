import Axios from "axios";

export const AddReviewAPI = async (review, token) => {
  return Axios.post("/review", { review, token });
};

export const UpdateReviewByIdAPI = async (reviewId, review, token) => {
  return Axios.put(`/review/${reviewId}`, { review, token });
};

export const GetReviewsWithUserDataAPI = async (reviewOfId, reviewType) => {
  return Axios.get("/review/with-user", {
    params: { reviewType, reviewOfId },
  });
};

export const DeleteReviewByIdAPI = async (reviewId, token) => {
  return Axios.delete(`/review/${reviewId}`, { data: { token } });
};
