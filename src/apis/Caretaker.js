import Axios from "axios";

export const AddCaretakerAPI = async (caretaker) => {
  return await Axios.post("/caretaker", caretaker);
};
