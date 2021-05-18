import Axios from "axios";

export const GetUserById = async (userId) => {
  return Axios.get(`/user/${userId}`);
};

export const GetUserByTargetUserIdAPI = async (targetUserId) => {
  return Axios.get(`/user-target/${targetUserId}`);
};

export const UpdateUserById = async (userId, userAfterUpdate, token) => {
  return Axios.put(`/user/${userId}`, {
    user: userAfterUpdate,
    token,
  });
};
