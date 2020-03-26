import React from "react";
import { Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";
import Dashboard from "./components/pages/dashboard/dashboard";
import Employee from "./components/pages/employee/employee";
import { Layout } from "antd";
import PrivateRoute from "./components/utils/PrivateRoute";
import Navbar from "./components/layout/navbar/Navbar";
import Login from "./components/pages/login/Login";
const { Content } = Layout;

function App(props) {
  return (
    <div className="App">
      <Navbar/>
      <Route exact path="/" component={Login} />
      <Layout className="container">
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: "90vh",
          }}
        >
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/employee-list" component={Employee} />
          </Switch>
        </Content>
      </Layout>
      ;
    </div>
  );
}
export default App;
