import React, { useState } from "react";
import { useAlert } from "react-alert";
import "./navbar.scss";
import { Link, withRouter } from "react-router-dom";
import { Layout, Menu, Dropdown, Drawer } from "antd";
import {
  UserOutlined,
  DownOutlined,
  MenuOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userLogout } from "../../../actions/auth/authActions";
const { Header } = Layout;

const Navbar = (props) => {
  const menuList = [
    {
      name: "Dashboard",
      icon: <PieChartOutlined />,
      link: "/dashboard",
    },
    {
      name: "Employee",
      icon: <UserOutlined />,
      link: "/employee-list",
    },
  ];
  const [visible, setVisible] = useState(false);
  const [menus, setMenus] = useState(menuList);
  const alert = useAlert();
  const onClose = () => {
    setVisible(!visible);
  };
  const logout = () => {
    props.userLogout();
    alert.success("You have successfully Log Out !");
    props.history.push("/");
  };

  const { auth } = props;
  const menu = (
    <Menu>
      <Menu.Item>
        <span>Profile</span>
      </Menu.Item>
      <Menu.Item>
        <span onClick={logout}>Log out</span>
      </Menu.Item>
    </Menu>
  );
  return (
    auth.isAuthenticated && (
      <Layout>
        <Header className="header" style={{ height: "50px" }}>
          <MenuOutlined className="menu-icon" onClick={onClose} />
          <h2 className="logo">Identity & Access Management</h2>

          <Dropdown overlay={menu} className="login-user">
            <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
              <UserOutlined className="user-logo" /> {auth.user.username}{" "}
              <DownOutlined />
            </a>
          </Dropdown>
        </Header>
        <Drawer
          title="Menu"
          placement="left"
          closable={true}
          onClose={onClose}
          visible={visible}
          mask={true}
        >
          <Menu mode="inline" defaultSelectedKeys={["0"]}>
            {menus.map((menu, index) => (
              <Menu.Item key={index}>
                <Link to={menu.link} onClick={onClose}>
                  {menu.icon} {menu.name}
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        </Drawer>
      </Layout>
    )
  );
};

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  userLogout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { userLogout })(withRouter(Navbar));
