import { all } from "redux-saga/effects";
import { employeeActionWatcher } from "./employee.sagas";
import { authActionWatcher } from "./auth.sagas";

export function* employeeSaga() {
  yield all([employeeActionWatcher(), authActionWatcher()]);
}

export default employeeSaga;
