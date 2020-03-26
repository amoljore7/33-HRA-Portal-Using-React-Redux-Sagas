import React, { Component } from "react";
import "./login.css";
import { Alert } from "antd";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { userLogin } from "../../../actions/auth/authActions";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      password: null,
      err: false,
    };
  }

  loginHandler = (e) => {
    e.preventDefault();
    if (this.state.name == null || this.state.password == null) {
      alert("please fill info");
      this.setState({
        err: true,
      });
    } else {
      const user = {
        username: this.state.name,
        password: this.state.password,
      };
      localStorage.setItem("user", JSON.stringify(user));
      this.props.userLogin(user);
      let msg = <Alert message="Login Succesfully" type="success" showIcon />;
      this.props.history.push("/dashboard");
    }
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="back">
          <h2> Identity and Access Management Portal</h2>
          <div className="cont">
            <div className="form">
              <h1>Login</h1>
              <form onSubmit={this.loginHandler}>
                <input
                  type="text"
                  name="name"
                  className="user"
                  onChange={this.handleChange}
                  placeholder="Username"
                />
                <input
                  type="password"
                  className="pass"
                  name="password"
                  onChange={this.handleChange}
                  placeholder="Password"
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
  }
}
Login.propTypes = {
  userLogin: PropTypes.func.isRequired,
};

export default connect(null, { userLogin })(Login);
