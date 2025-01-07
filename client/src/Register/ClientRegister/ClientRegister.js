import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ClientRegister.css";
import axios from 'axios';

const ClientRegister = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/client-multi");
  };

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [repeatPassword, setRepeatPassword] = useState("")

  const handleSignup = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/signup", {name, email, password})
    .then(result => {
      if(result.status == 201){
        console.log("User Created Successfully");
        navigate("/client-multi");
      }
    })
    .catch(err => {
      if (err.response && err.response.status===400) {
        window.alert("Email already exists. Please use a different email")
      } else{
        console.log(err)
      }
    })
  }

  return (
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
          type="email" id="email" 
          placeholder="Enter your email" 
          name='email'
          onChange={(e) => setEmail(e.target.value)}
          required
      />

      <label htmlFor="password">Password</label>
      <input  type="password" 
              id="password" 
              placeholder="Enter your password" 
              name='password'
              onChange={(e) => setPassword(e.target.value)}
              required
      />

      <label htmlFor="repeat-password">Repeat Password</label>
      <input
        type="password"
        id="repeat-password"
        placeholder="Repeat your password"
        // name='repeat-password'
        // onChange={(e) => setRepeatPassword(e.target.value)}
        // required
      />

      <button type="submit" className="btn btn-register">
        Register
      </button>
    </form>
  );
};

export default ClientRegister;
