import Axios from "axios";

export const AddQuoteAPI = async (quote) => {
  return Axios.post("/quote", quote);
};

export const GetQuoteDataAPI = async (type) => {
  return Axios.get(`/quote/by/${type}`);
};
