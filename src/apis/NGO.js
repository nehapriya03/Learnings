import Axios from "axios";

export const AddNGOAPI = async (ngo) => {
  return Axios.post("/ngo", ngo);
};
