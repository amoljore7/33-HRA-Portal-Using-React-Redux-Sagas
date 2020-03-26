import { LOGIN, LOGOUT } from "./authTypes";

export const userLogin = (user) => {
  return {
    type: LOGIN,
    payload: user,
  };
};

export const userLogout = () => {
  return {
    type: LOGOUT,
  };
};
