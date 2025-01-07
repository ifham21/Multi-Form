import React from "react";
import "./ProfessionalDetails.css";
import { FaPaperclip } from "react-icons/fa";

function PartnerProfessionalDetails() {
  return (
    <div className="form-container">
      <h4>Professional Details</h4>

      <div className="form-group">
        <label htmlFor="professional-documents" className="thisLabel">
          Please upload related professional supporting documentation, CV,
          Certifications, Accreditations.
        </label>
        <div className="thisUpload-box">
          <input
            type="file"
            id="professional-documents"
            accept=".png, .jpg, .jpeg, .pdf"
          />
          <p>
            <FaPaperclip />
            Click to Upload
            <br />
            or drag and drop files here
          </p>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="valid-dbs" className="thisLabel">Valid DBS within 12 months</label>
        <div className="thisUpload-box">
          <input type="file" id="valid-dbs" accept=".png, .jpg, .jpeg, .pdf" />
          <p>
            <FaPaperclip />
            Click to Upload
            <br />
            or drag and drop files here
          </p>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="insurance-certificate" className="thisLabel">
          Valid Professional Indemnity Insurance Certificate
        </label>
        <div className="thisUpload-box">
          <input
            type="file"
            id="insurance-certificate"
            accept=".png, .jpg, .jpeg, .pdf"
          />
          <p>
            <FaPaperclip />
            Click to Upload
            <br />
            or drag and drop files here
          </p>
        </div>
      </div>

      <div className="form-group">
        <div className="thisCheckbox-group">
          <input type="checkbox" id="use-taurgo-supplied" />
          <label htmlFor="use-taurgo-supplied" className="thisLabel">
            Check box if you wish to use Taurgo supplied.
          </label>
        </div>
      </div>
    </div>
  );
}

export default PartnerProfessionalDetails;
