import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import axios from 'axios';

const RegisterPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("")

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      alert("Passwords do not match!");
      return;
  }
  axios.post("http://localhost:3001/api/auth/register", { name, email, password })
    .then(result => {
      if(result.status == 201){
        console.log("User Created Successfully");
      }
    })
    .catch(err => {
      if (err.response && err.response.status===400) {
        window.alert("Email already exists. Please use a different email")
      } else{
        console.log(err)
      }
    })
  };

  return (
    <>
      <div className="register-container">
        <div className="register-form">
          <div className="button-group">
            <h1>Register as Client</h1>
          </div>
          <h2>Create your account</h2>
          <form onSubmit={handleSignup}>
            <label htmlFor="org-reference">Organisation Reference</label>
            <input
              type="text"
              id="org-reference"
              placeholder="Organisation name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <label htmlFor="repeat-password">Repeat Password</label>
            <input
              type="password"
              id="repeat-password"
              placeholder="Repeat your password"
              name='repeat-password'
              onChange={(e) => setRepeatPassword(e.target.value)}
              required
            />

            <button type="submit" className="btn btn-register">
              Register
            </button>
          </form>
          <p className="lastLine">
            I have an Account? <a href="/login">Login</a>
          </p>
        </div>
        <div className="image-container"></div>
      </div>
    </>
  );
};

export default RegisterPage;
