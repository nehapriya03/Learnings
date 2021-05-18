import Axios from "axios";

export const AddCaretakerAPI = async (caretaker) => {
  return Axios.post("/caretaker", caretaker);
};

export const GetCaretakerByIdAPI = async (caretakerId) => {
  return Axios.get(`/caretaker/${caretakerId}`);
};

export const GetCaretakersByAvgReview = async (locationArray) => {
  return Axios.post("/caretaker/get/review", { locationArray });
};

export const UpdateCaretakerByIdAPI = async (
  caretakerId,
  caretakerAfterUpdate
) => {
  return Axios.put(`/caretaker/${caretakerId}`, caretakerAfterUpdate);
};
