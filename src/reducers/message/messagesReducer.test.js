import {
  GET_EMPLOYEES_LIST_FAIL,
  GET_SINGLE_EMPLOYEE_FAIL,
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEES_LIST_SUCCESS,
} from "../../actions/employee/employeeTypes";
import messagesReducer from "./messagesReducer";

describe("Message Reducer", () => {
  const initialState = {
    success: [],
    error: [],
  };

  it("should return default state", () => {
    const newState = messagesReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  test("should return error messages", () => {
    const action = {
      type: GET_EMPLOYEES_LIST_FAIL,
      payload: {
        id: 1,
        value: "Error while loading",
      },
    };
    const state = {
      success: [],
      error: [action.payload],
    };

    const newState = messagesReducer(initialState, action);
    expect(newState).toEqual(state);
  });
  test("should return success messages", () => {
    const action = {
      type: ADD_EMPLOYEE_SUCCESS,
      payload: {
        id: 1,
        value: "added successfully",
      },
    };
    const state = {
      error: [],
      success: [action.payload],
    };

    const newState = messagesReducer(initialState, action);
    expect(newState).toEqual(state);
  });
});
