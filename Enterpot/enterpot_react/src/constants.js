export const BASE_URL = "http://localhost:5000";

export const isEmptyObject = (obj) => {
  return typeof obj === "object" && Object.keys(obj).length === 0;
};
