import React from "react";
import "./RegistrationSuccess.css";
import image from "../../../taurgo-logo.png";

const RegistrationSuccess = () => {
  return (
    <div className="registration-success">
      <div className="logo-container">
        <img src={image} alt="Tauro Logo" className="logo" />
      </div>

      <div className="message">
        <p className="title">Thank You!</p>
        <p className="subtitle">You have completed the registration process</p>
      </div>

      <div className="checkmark-container">
        <div className="checkmark">
          <i className="bi bi-check-lg"></i>
        </div>
      </div>

      <button className="ok-button">OK</button>
    </div>
  );
};

export default RegistrationSuccess;
