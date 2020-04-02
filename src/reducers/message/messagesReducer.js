import {
  GET_EMPLOYEES_LIST_FAIL,
  GET_SINGLE_EMPLOYEE_FAIL,
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEES_LIST_SUCCESS,
} from "../../actions/employee/employeeTypes";

const initialState = {
  success: [],
  error: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EMPLOYEES_LIST_FAIL:
    case GET_SINGLE_EMPLOYEE_FAIL:
      return {
        ...state,
        error: [...state.error, action.payload],
      };

    case ADD_EMPLOYEE_SUCCESS:
    case ADD_EMPLOYEES_LIST_SUCCESS:
      return {
        ...state,
        success: [...state.success, action.payload],
      };

    default:
      return state;
  }
}
