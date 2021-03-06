import {
  GET_EMPLOYEES_LIST_SUCCESS,
  GET_SINGLE_EMPLOYEE_SUCCESS,
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

    case SET_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };

    case ADD_EMPLOYEE_FAIL:
    case ADD_EMPLOYEES_LIST_FAIL:
      return {
        ...state,
        errors: [...state.errors, action.payload],
      };

    default:
      return state;
  }
}
