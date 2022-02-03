import { userActionTypes } from "./userTypes";
export const setUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});
export const SignOut = (user) => ({
  type: userActionTypes.SIGN_OUT,
  payload: user,
});
