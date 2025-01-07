import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const handleRegisterNavigation = () => {
    navigate("/register");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Check if the input is for admin
    if (email === "admin@email.com" && password === "admin") {
      navigate("/Admin");
      return;
    }

    // Regular login functionality
    axios.post("http://localhost:3001/login", { email, password })
      .then(result => {
        if (result.data === "Success") {
          navigate("/dashboard");
        } else {
          alert("Login failed: User does not exist, please register!");
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Log in</h1>
        <p className="welcome">Welcome back!</p>

        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input 
            name="email" 
            type="email" 
            id="email" 
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email" 
          />

          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password" 
            id="password" 
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password" 
          />

          <div className="options">
            <label>
              <input type="checkbox" />
              <span className="text">Remember for 30 days</span> 
            </label>
            <a href="/forgot-password">Forgot password?</a>
          </div>
          <button type="submit" className="btn">Sign in</button>
        </form>

        <p className="lastLine">
          Don’t have an account?{" "}
          <span onClick={handleRegisterNavigation} className="register-link">
            Register
          </span>
        </p>
      </div>
      <div className="image-section"></div>
    </div>
  );
};

export default Login;
