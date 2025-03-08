import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/SportsApp");
  };
  return (
    <>
      <h1 className="welcome-message">Welcome, ready to compete?</h1>
      <div className="container">
        <h1 className="login-heading">Login</h1>
        <div className="username">
          Username
          <input type="text" placeholder="Enter your username" />
        </div>
        <div className="password">
          Password
          <input type="password" placeholder="Enter your password" />
        </div>
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </>
  );
}
export default Login;
