import { put, takeLatest } from "redux-saga/effects";
import { SET_LOADING } from "../actions/employee/employeeTypes";
import {
  LOGIN,
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
} from "../actions/auth/authTypes";

function* userLogin({ action, payload }) {
  // yield put({ type: SET_LOADING });
  // try {
  //    const user = yield fetch(`https://`).then((response) => response.json());

  //    yield put({ type: LOGIN_SUCCESS, payload: user });
  // } catch (e) {
  //    yield put({ type: LOGIN_FAIL, payload: e.message });
  // }
  // yield put({ type: SET_LOADING });
  yield put({ type: LOGIN_SUCCESS, payload: payload });
}
function* userLogout({ action, payload }) {
  // yield put({ type: SET_LOADING });
  // try {
  //    const user = yield fetch(`https://`).then((response) => response.json());

  //    yield put({ type: LOGOUT_SUCCESS, payload: user });
  // } catch (e) {
  //    yield put({ type: LOGOUT_FAIL, payload: e.message });
  // }
  // yield put({ type: SET_LOADING });
  localStorage.removeItem("user");
  yield put({ type: LOGOUT_SUCCESS });
}

export function* authActionWatcher() {
  yield takeLatest(LOGIN, userLogin);
  yield takeLatest(LOGOUT, userLogout);
}
