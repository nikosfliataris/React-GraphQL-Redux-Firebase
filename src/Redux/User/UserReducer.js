import { userActionTypes } from "./userTypes";
const INITIAL_STATE = {
  User: null,
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        User: action.payload,
      };
    case userActionTypes.SIGN_OUT:
      return {
        ...state,
        User: null,
      };
    default:
      return state;
  }
};

export default userReducer;
