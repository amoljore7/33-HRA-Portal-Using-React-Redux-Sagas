import {
  GET_EMPLOYEES_LIST,
  GET_SINGLE_EMPLOYEE,
  ADD_EMPLOYEE,
  ADD_EMPLOYEES_LIST,
} from "./employeeTypes";

export const getEmployeeList = () => {
  return {
    type: GET_EMPLOYEES_LIST,
  };
};

export const getEmployeeDetails = (eid) => {
  return {
    type: GET_SINGLE_EMPLOYEE,
    payload: eid,
  };
};

export const addEmployee = (employee) => {
  return {
    type: ADD_EMPLOYEE,
    payload: employee,
  };
};

export const addEmployeeList = (employeeList) => {
  return {
    type: ADD_EMPLOYEES_LIST,
    payload: employeeList,
  };
};
