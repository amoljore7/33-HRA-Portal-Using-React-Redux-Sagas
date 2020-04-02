import employeeReducer from "./employeeReducer";
import {
  GET_EMPLOYEES_LIST_SUCCESS,
  GET_SINGLE_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_FAIL,
  SET_LOADING,
} from "../../actions/employee/employeeTypes";

describe("Employee Reducer", () => {
  const initialState = {
    employeeList: [],
    employeeDetails: {},
    errors: [],
    loading: false,
  };

  test("should return default state", () => {
    const newState = employeeReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  test("set loading", () => {
    const action = {
      type: SET_LOADING,
      payload: {},
    };
    const state = {
      employeeList: [],
      employeeDetails: {},
      errors: [],
      loading: !initialState.loading,
    };

    const newState = employeeReducer(initialState, action);
    expect(newState).toEqual(state);
  });

  test("get employee list", () => {
    const action = {
      type: GET_EMPLOYEES_LIST_SUCCESS,
      payload: [
        {
          empid: "GS-2450",
          name: "shailesh Dhokare",
        },
      ],
    };
    const state = {
      employeeList: [...action.payload],
      employeeDetails: {},
      errors: [],
      loading: false,
    };

    const newState = employeeReducer(initialState, action);
    expect(newState).toEqual(state);
  });

  test("get employee details", () => {
    const action = {
      type: GET_SINGLE_EMPLOYEE_SUCCESS,
      payload: {
        empid: "GS-2450",
        name: "shailesh Dhokare",
      },
    };
    const state = {
      employeeList: [],
      employeeDetails: action.payload,
      errors: [],
      loading: false,
    };

    const newState = employeeReducer(initialState, action);
    expect(newState).toEqual(state);
  });
  test("get employee details fail", () => {
    const action = {
      type: ADD_EMPLOYEE_FAIL,
      payload: {
        empid: "GS-2450",
        name: "shailesh Dhokare",
      },
    };
    const state = {
      employeeList: [],
      employeeDetails: {},
      errors: [action.payload],
      loading: false,
    };

    const newState = employeeReducer(initialState, action);
    expect(newState).toEqual(state);
  });
});
