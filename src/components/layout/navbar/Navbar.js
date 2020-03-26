import React, { useState, useEffect } from "react";
import "./navbar.scss";
import { NavLink, withRouter } from "react-router-dom";
import { Layout, Menu, Dropdown, Drawer } from "antd";
import {
  UserOutlined,
  DownOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Divider } from "antd";

import ComponentList from "./componentList";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userLogout } from "../../../actions/auth/authActions";

function Navbar(props) {
   const { Header, Content } = Layout;
   const [loginData] = useState(JSON.parse(localStorage.getItem("user")));
   const [routeLink, setRouteLink] = useState("");
   const [visible, setVisible] = useState(false);

   const ForwardNavLink = React.forwardRef((props, ref) => (
      <NavLink {...props} innerRef={ref} />
   ));

   const Role = loginData;
   const role = "admin" || Role;

   const onClose = () => {
      console.log('close');
      setVisible(!visible);
   };
   const logout = () => {
      props.userLogout();
      props.history.push("/");
   };

   const sideBarList = ComponentList;

   const roleList = () => {
      if (role) {
         const roleLower = role.toString().toLowerCase();
         return sideBarList[roleLower];
      }
      return 0;
   };

   function onListClick(route) {
      setRouteLink(roleList().filter((item) => item.link === route)[0]);
   }

   const menu = (
      <Menu>
         <Menu.Item>
         <a target="_blank" rel="noopener noreferrer" href="#">
            Profile
         </a>
         </Menu.Item>
         <Menu.Item>
         <a target="_blank" rel="noopener noreferrer" onClick={logout}>
            Log out
         </a>
         </Menu.Item>
      </Menu>
   );
   
   return (
      props.auth.isAuthenticated && (
         <Layout>
         <Header className="header" style={{ height: "50px" }}>
            <MenuOutlined className="menu-icon" onClick={onClose} />
            <h2 className="logo">Identity & Access Management</h2>

            <Dropdown overlay={menu} className="login-user">
               <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
               <UserOutlined className="user-logo" /> {props.auth.user.username}{" "}
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
            <div className="site-layout-background">
               <Menu
               mode="inline"
               defaultSelectedKeys={["1"]}
               style={{ height: "100%", borderRight: 0 }}
               >
               {roleList() &&
                  roleList().length &&
                  roleList().map((index, item) => (
                     <Menu.Item key={index.name}>
                        <NavLink to={index.link}>
                           {index.icon} {index.name}
                        </NavLink>
                     </Menu.Item>
                  ))}
               <Divider />
               </Menu>
            </div>
         </Drawer>
         </Layout>
      )
   );
}
Navbar.propTypes = {
   auth: PropTypes.object.isRequired,
   userLogout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
   auth: state.auth,
});

export default connect(mapStateToProps, { userLogout })(withRouter(Navbar));