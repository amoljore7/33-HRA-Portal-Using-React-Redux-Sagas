import {
  GET_EMPLOYEES_LIST,
  GET_SINGLE_EMPLOYEE,
  ADD_EMPLOYEE,
  ADD_EMPLOYEES_LIST,
} from "./employeeTypes";

import {
  getEmployeeDetails,
  getEmployeeList,
  addEmployeeList,
  addEmployee,
} from "./employeeActions";

test("should return GET_EMPLOYEES_LIST action type", () => {
  const output = {
    type: GET_EMPLOYEES_LIST,
  };
  const action = getEmployeeList();
  expect(action).toEqual(output);
});

test("should return GET_SINGLE_EMPLOYEE action type", () => {
  let empId = "GS-2450";
  const output = {
    type: GET_SINGLE_EMPLOYEE,
    payload: empId,
  };
  const action = getEmployeeDetails(empId);
  expect(action).toEqual(output);
});

test("should return ADD_EMPLOYEE action type", () => {
  let employee = {
    id: "GS-2450",
    name: "Shailesh Dhokare",
  };
  const output = {
    type: ADD_EMPLOYEE,
    payload: employee,
  };
  const action = addEmployee(employee);
  expect(action).toEqual(output);
});

test("should return ADD_EMPLOYEES_LIST action type", () => {
  let employee = [
    {
      id: "GS-2450",
      name: "Shailesh Dhokare",
    },
  ];
  const output = {
    type: ADD_EMPLOYEES_LIST,
    payload: employee,
  };
  const action = addEmployeeList(employee);
  expect(action).toEqual(output);
});
