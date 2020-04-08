import React from "react";
import { shallow, mount, render } from "enzyme";
import Login from "./Login";
import Root from "../../../testHelpers/Root";

describe("Navbar component", () => {
  let component;
  beforeEach(() => {
    const initialState = {
      auth: {
        user: {
          username: "Admin",
          password: "123456",
        },
        loginErrors: [],
        isAuthenticated: false,
      },
      employee: {
        employeeList: [],
        employeeDetails: {},
        errors: [],
        loading: false,
      },
    };
    component = mount(
      <Root initialState={initialState}>
        <Login />
      </Root>
    );
  });

  test("should render correctly", () => {
    const wrapper = component.find(".back");
    expect(wrapper.length).toBe(1);
  });
  test("should have two inputs", () => {
    const wrapper = component.find("input");
    expect(wrapper.length).toBe(2);
  });
  test("should have one button", () => {
    const wrapper = component.find("button");
    expect(wrapper.length).toBe(1);
  });
});
