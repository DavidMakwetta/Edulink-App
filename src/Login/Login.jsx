import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="addUser">
      <h3>Sign In</h3>
      <form className="addUserForm">
        <div className="inputGroup">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            autoComplete="off"
            placeholder="Enter your Email"
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            autoComplete="off"
            placeholder="Enter your Password"
          />
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
      <div className="login">
        <p>Don't have an Account?</p>
        <Link to="/" type="submit" className="btn btn-success">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
