import React from "react";
import "./login.css";
function Login() {
  return (
    <>
      <div className="container">
        <h1 className="welcome-message">Welcome, ready to compete?</h1>
        <h1 className="login-heading">Login</h1>
        <div className="username">
          Username
          <input type="text" placeholder="Enter your username" />
        </div>
        <div className="password">
          Password
          <input type="password" placeholder="Enter your password" />
        </div>
      </div>
    </>
  );
}
export default Login;
