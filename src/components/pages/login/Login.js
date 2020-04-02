import React, { useState } from "react";
import "./login.scss";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { userLogin } from "../../../actions/auth/authActions";
import { withRouter } from "react-router-dom";

const Login = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const loginHandler = (e) => {
    e.preventDefault();
    if (name == null || password == null) {
      alert("please fill info");
      setError(true);
    } else {
      const user = {
        username: name,
        password: password,
      };
      localStorage.setItem("user", JSON.stringify(user));
      props.userLogin(user);
      props.history.push("/dashboard");
    }
  };

  return (
    <div className="back">
      <h2> Identity and Access Management Portal</h2>
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
  );
};
Login.propTypes = {
  userLogin: PropTypes.func.isRequired,
};

export default connect(null, { userLogin })(withRouter(Login));
