import React from "react";

const OrganisationDetails = () => {
  return (
    <div className="form-content">
      <h2>Organisation Details</h2>
      <form>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="companyName">Company Name *</label>
            <input
              type="text"
              id="companyName"
              placeholder="Enter company name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="fullName">Full Name *</label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter full name"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              placeholder="hello@example.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone *</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter phone number"
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default OrganisationDetails;
