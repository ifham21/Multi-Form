import React, { useState } from "react";
import "./Register.css";
import ClientRegister from "./ClientRegister/ClientRegister";

const RegisterPage = () => {
  const [isClient, setIsClient] = useState(true);

  return (
    <>
      <div className="register-container">
        <div className="register-form">
          <div className="button-group">
              <h1>Register as Client</h1>
          </div>
          <h2>Create your account</h2>
           <ClientRegister />
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
