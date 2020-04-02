import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import { Layout } from "antd";
import Navbar from "./components/layout/navbar/Navbar";
import BreadcrumbMenu from "./components/includes/breadcrumb/BreadcrumbMenu";
import Root from "./testHelpers/Root";

describe("App component", () => {
  let component;
  beforeEach(() => {
    const initialState = {
      auth: {
        user: {
          username: "Shailesh Dhokare",
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
        <App />
      </Root>
    );
  });
  test("Navbar should be rendered", () => {
    const wrapper = component.find(Navbar);
    expect(wrapper.length).toBe(1);
  });

  test("should contain container layout", () => {
    const wrapper = component.find(Layout);
    expect(wrapper.length).toBe(1);
  });

  test("Check for Breadcrums", () => {
    const wrapper = component.find(BreadcrumbMenu);
    expect(wrapper.length).toBe(0);
  });
});
