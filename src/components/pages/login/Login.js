import React, { useState } from "react";
import { useAlert } from "react-alert";

import "./login.scss";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { userLogin } from "../../../actions/auth/authActions";
import { withRouter } from "react-router-dom";
import { Spin } from 'antd';

const Login = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");

  const alert = useAlert();

  const loginHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!name || !password) {
      alert.error("Please fill all field !");
    } else {
      const user = {
        username: name,
        password: password,
      };
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      alert.success("You have successfully login !");

      localStorage.setItem("user", JSON.stringify(user));
      props.userLogin(user);
      props.history.push("/dashboard");
    }
  };

  return (
    <React.Fragment  loading={loading}>
      <div className="back">
        <h1> HR Portal</h1>
        <div className="cont">
          <div className="form">
            <h1>Login</h1>
            <form onSubmit={loginHandler}>
              <input
                type="text"
                name="name"
                className="user"
                onChange={(e) => setName(e.target.value)}
                placeholder="Username"
                value={name}
                id="user"
              />
              <input
                type="password"
                className="pass"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                value={password}
              />
              
              <button className="login" type="submit">
                Login
            </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
Login.propTypes = {
  userLogin: PropTypes.func.isRequired,
};

export default connect(null, { userLogin })(withRouter(Login));
