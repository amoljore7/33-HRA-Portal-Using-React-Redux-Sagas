import { put, takeLatest } from "redux-saga/effects";
import {
  GET_EMPLOYEES_LIST,
  GET_SINGLE_EMPLOYEE,
  ADD_EMPLOYEE,
  ADD_EMPLOYEES_LIST,
  GET_EMPLOYEES_LIST_SUCCESS,
  GET_EMPLOYEES_LIST_FAIL,
  GET_SINGLE_EMPLOYEE_SUCCESS,
  GET_SINGLE_EMPLOYEE_FAIL,
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEES_LIST_SUCCESS,
  ADD_EMPLOYEES_LIST_FAIL,
  ADD_EMPLOYEE_FAIL,
  SET_LOADING,
} from "../actions/employee/employeeTypes";

function* getEmployeeList() {
  yield put({ type: SET_LOADING });
  try {
    const employeeList = yield fetch(`https://`).then((response) => response.json());

    yield put({ type: GET_EMPLOYEES_LIST_SUCCESS, payload: employeeList });
  } catch (e) {
    yield put({ type: GET_EMPLOYEES_LIST_FAIL, payload: e.message });
  }
  yield put({ type: SET_LOADING });
}
function* getEmployeeDetails({ action, payload }) {
  yield put({ type: SET_LOADING });
  try {
    const employeeDetails = yield fetch(`https://`).then((response) =>
      response.json()
    );

    yield put({ type: GET_SINGLE_EMPLOYEE_SUCCESS, payload: employeeDetails });
  } catch (e) {
    yield put({ type: GET_SINGLE_EMPLOYEE_FAIL, payload: e.message });
  }
}

function* addEmployee({ action, payload }) {
  yield put({ type: SET_LOADING });
  try {
    const employee = yield fetch(`https://`).then((response) => response.json());

    yield put({ type: ADD_EMPLOYEE_SUCCESS, payload: employee });
  } catch (e) {
    yield put({ type: ADD_EMPLOYEE_FAIL, payload: e.message });
  }
  yield put({ type: SET_LOADING });
}

function* addEmployeeList({ action, payload }) {
  yield put({ type: SET_LOADING });
  try {
    const employeeList = yield fetch(`https://`).then((response) => response.json());

    yield put({ type: ADD_EMPLOYEES_LIST_SUCCESS, payload: employeeList });
  } catch (e) {
    yield put({ type: ADD_EMPLOYEES_LIST_FAIL, payload: e.message });
  }
  yield put({ type: SET_LOADING });
}

export function* employeeActionWatcher() {
  yield takeLatest(GET_EMPLOYEES_LIST, getEmployeeList);
  yield takeLatest(GET_SINGLE_EMPLOYEE, getEmployeeDetails);
  yield takeLatest(ADD_EMPLOYEE, addEmployee);
  yield takeLatest(ADD_EMPLOYEES_LIST, addEmployeeList);
}
