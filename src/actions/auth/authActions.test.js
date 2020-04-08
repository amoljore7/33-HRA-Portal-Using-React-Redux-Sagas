import { LOGIN, LOGOUT } from "./authTypes";
import { userLogin, userLogout } from "./authActions";

const user = {
  name: "Admin",
  password: "123456",
};
test("should return user object and LOGIN action type", () => {
  const output = {
    type: LOGIN,
    payload: user,
  };
  const action = userLogin(user);
  expect(action).toEqual(output);
});
test("should return LOGOUT action type", () => {
  const output = {
    type: LOGOUT,
  };
  const action = userLogout();
  expect(action).toEqual(output);
});
