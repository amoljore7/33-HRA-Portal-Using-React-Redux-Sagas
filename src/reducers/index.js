import { combineReducers } from "redux";
import employeeReducer from "./employee/employeeReducer";
import authReducer from "./auth/authReducer";

export default combineReducers({
  employee: employeeReducer,
  auth: authReducer,
});
