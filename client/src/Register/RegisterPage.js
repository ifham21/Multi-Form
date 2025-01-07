import React, { useState } from "react";
import "./Register.css";
import ClientRegister from "./ClientRegister/ClientRegister";
import image from "../taurgo-logo.png";
import rics from "../rics-logo.png";
import PartnerRegister from "./PartnerRegister/PartnerRegister";

const RegisterPage = () => {
  // State to check which form is visible
  const [isClient, setIsClient] = useState(true);

  return (
    <>
      <div className="register-container">
        <div className="register-form">
          <div className="logo">
            <img src={image} alt="Taurgo Logo" />
          </div>
          <div className="button-group">
            <button
              className={`btn btn-client ${isClient ? "active" : ""}`}
              onClick={() => setIsClient(true)}
            >
              Register as Client
            </button>
            <button
              className={`btn btn-partner ${!isClient ? "active" : ""}`}
              onClick={() => setIsClient(false)}
            >
              Register as Partner
            </button>
          </div>
          <h2>Create your account</h2>
          {isClient ? <ClientRegister /> : <PartnerRegister />}
          <p className="lastLine">
            I have an Account? <a href="/login">Login</a>
          </p>

          <div className="footer">
            <p>© Taurgo</p>
            <p>
              <img src={rics} alt="RICS Logo" />
            </p>
          </div>
        </div>
        <div className="image-container"></div>
      </div>
    </>
  );
};

export default RegisterPage;
