import {
  GET_EMPLOYEES_LIST_SUCCESS,
  GET_EMPLOYEES_LIST_FAIL,
  GET_SINGLE_EMPLOYEE_SUCCESS,
  GET_SINGLE_EMPLOYEE_FAIL,
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEES_LIST_SUCCESS,
  ADD_EMPLOYEES_LIST_FAIL,
  ADD_EMPLOYEE_FAIL,
  SET_LOADING,
} from "../../actions/employee/employeeTypes";

const initialState = {
  employeeList: [],
  employeeDetails: {},
  errors: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EMPLOYEES_LIST_SUCCESS:
      return {
        ...state,
        employeeList: action.payload,
      };

    case GET_SINGLE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        employeeDetails: action.payload,
      };

    case ADD_EMPLOYEE_SUCCESS:
      return {
        ...state,
      };

    case ADD_EMPLOYEES_LIST_SUCCESS:
      return {
        ...state,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };

    case GET_EMPLOYEES_LIST_FAIL:
    case GET_SINGLE_EMPLOYEE_FAIL:
    case ADD_EMPLOYEE_FAIL:
    case ADD_EMPLOYEES_LIST_FAIL:
      return {
        ...state,
        errors: [state.errors, ...action.payload],
      };

    default:
      return state;
  }
}
