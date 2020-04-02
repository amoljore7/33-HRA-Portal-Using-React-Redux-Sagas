import authReducer from "./authReducer";
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
} from "../../actions/auth/authTypes";

describe("Auth Reducer", () => {
  const initialState = {
    user: {},
    loginErrors: [],
    isAuthenticated: false,
  };

  it("should return default state", () => {
    const newState = authReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  test("should return user objest and isAuthenticated", () => {
    const action = {
      type: LOGIN_SUCCESS,
      payload: {
        name: "Shailesh Dhokare",
        password: "123456",
      },
    };
    const state = {
      user: action.payload,
      loginErrors: [],
      isAuthenticated: true,
    };

    const newState = authReducer(initialState, action);
    expect(newState).toEqual(state);
  });

  test("should set state to initial", () => {
    const action = {
      type: LOGOUT_SUCCESS,
      payload: {},
    };

    const newState = authReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });

  test("should set Login Errors", () => {
    const action = {
      type: LOGIN_FAIL,
      payload: {
        name: "Shailesh Dhokare",
        password: "123456",
      },
    };
    const state = {
      user: {},
      loginErrors: [action.payload],
      isAuthenticated: false,
    };

    const newState = authReducer(initialState, action);
    expect(newState).toEqual(state);
  });
});
