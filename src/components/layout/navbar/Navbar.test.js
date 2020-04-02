import React from "react";
import { shallow, mount } from "enzyme";
import Navbar from "./Navbar";
import { Layout, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Root from "../../../testHelpers/Root";
const { Header } = Layout;

describe("Nvabar component", () => {
  let component;
  beforeEach(() => {
    const initialState = {
      auth: {
        user: {
          username: "Shailesh Dhokare",
          password: "123456",
        },
        loginErrors: [],
        isAuthenticated: true,
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
        <Navbar />
      </Root>
    );
  });

  test("should render correctly", () => {
    const wrapper = component.find(Header);
    expect(wrapper.length).toBe(1);
  });

  test("should open drawer", () => {
    const menuButton = component.find(MenuOutlined);
    menuButton.simulate("click");
    const drawerMenu = component.find(Drawer);
    expect(drawerMenu.prop("visible")).toBe(true);
  });
});
