import React from "react";
import { positions} from "react-alert";
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from "react-alert-template-basic";
import { Route, Switch, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "antd/dist/antd.css";
import "./App.css";
import { Layout } from "antd";
import Dashboard from "./components/pages/dashboard/dashboard";
import Employee from "./components/pages/employee/employee";
import PrivateRoute from "./components/utils/PrivateRoute";
import Navbar from "./components/layout/navbar/Navbar";
import Login from "./components/pages/login/Login";
import BreadcrumbMenu from "./components/includes/breadcrumb/BreadcrumbMenu";

const { Content } = Layout;
const options = {
  timeout: 5000,
  position: positions.BOTTOM_LEFT
};

const App = (props) => {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <div className="App">
        <Navbar />
        <Route
          exact
          path="/"
          render={() =>
            props.auth.isAuthenticated ? <Redirect to="/dashboard" /> : <Login />
          }
        />
        <Layout className="container">
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: "90vh",
            }}
          >
            {props.auth.isAuthenticated && <BreadcrumbMenu />}
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/employee-list" component={Employee} />
            </Switch>
          </Content>
        </Layout>
      </div>
    </AlertProvider>
  );
};

App.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(App);
