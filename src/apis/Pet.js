import Axios from "axios";

export const AddPetAPI = async (pet) => {
  return await Axios.post("/pet", pet);
};

export const GetPetByIdAPI = async (petId) => {
  return await Axios.get(`/pet/${petId}`);
};

export const GetPetsByOwnerIdAPI = async (ownerId) => {
  return await Axios.get(`/pet/by_owner/${ownerId}`);
};

export const GetPetsByAvgReviewsAPI = async (locationArray) => {
  return await Axios.post("/pet/get/review", { locationArray });
};

export const UpdatePetByIdAPI = async (petId, pet) => {
  return await Axios.put(`/pet/${petId}`, pet);
};
