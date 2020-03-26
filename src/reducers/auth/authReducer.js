import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_FAIL,
} from "../../actions/auth/authTypes";
const initialState = {
  user: {},
  loginErrors: [],
  isAuthenticated: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: {},
        isAuthenticated: false,
      };

    case LOGIN_FAIL:
    case LOGOUT_FAIL:
      return {
        ...state,
        loginErrors: [state.loginErrors, ...action.payload],
      };

    default:
      return state;
  }
}
