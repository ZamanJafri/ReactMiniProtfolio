import React from "react";
import "./register.style.css";
import { Link } from "react-router-dom";
const Registration = () => {
  return (
    <>
      <div className="container">
        <div className="form-container">
          <div className="text">
            <h1>Registration</h1>
          </div>
          <form action="">
            <input
              type="text"
              name="username"
              placeholder="Write your good name here..."
              autoComplete="off"
            />
            <input
              type="email"
              name="email"
              placeholder="Write your good email address..."
              autoComplete="off"
            />
            <input type="number" name="number" placeholder="Mobile Number" />
            <input type="password" name="password" placeholder="Password" />
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
          <span className="para">
            If already have an account?
            <Link to='/login'>Login Now</Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Registration;
