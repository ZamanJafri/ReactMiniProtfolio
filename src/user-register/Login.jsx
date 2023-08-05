import React from "react";
import "./register.style.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="container">
        <div className="form-container">
          <div className="text">
            <h1>Login</h1>
          </div>
          <form action="">
            <input type="email" name="email" placeholder="Email address..." autoComplete="off"/>
            <input type="password" name="password" placeholder="Password" autoComplete="off"/>
            <button type="submit" className="btn">
              Login
            </button>
          </form>
          <span className="para">
            If don't have account
            <Link to='/'>Create Account</Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Login;
