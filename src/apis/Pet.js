import Axios from "axios";

export const AddPetAPI = async (pet) => {
  return Axios.post("/pet", pet);
};

export const GetPetByIdAPI = async (petId) => {
  return Axios.get(`/pet/${petId}`);
};

export const GetPetsByOwnerIdAPI = async (ownerId) => {
  return Axios.get(`/pet/by_owner/${ownerId}`);
};

export const GetPetsByAvgReviewsAPI = async (locationArray, mateStatus, petId) => {
  return Axios.post(
    "/pet/get/review",
    { locationArray, petId },
    { params: { mateStatus } }
  );
};

export const UpdatePetByIdAPI = async (petId, pet) => {
  return Axios.put(`/pet/${petId}`, pet);
};
