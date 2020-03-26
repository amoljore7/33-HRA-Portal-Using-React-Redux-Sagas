import React from "react";
import Dashboard from "../../pages/dashboard/dashboard";
import Employee from "../../pages/employee/employee";

import { PieChartOutlined, UserOutlined } from "@ant-design/icons";

const ComponentList = {
  admin: [
    {
      name: "AdminDashboard",
      icon: <PieChartOutlined />,
      link: "/dashboard",
      component: Dashboard,
    },
    {
      name: "Employee",
      icon: <UserOutlined />,
      link: "/employee-list",
      component: Employee,
    },
  ],
};
export default ComponentList;
