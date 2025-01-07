import React from "react";
import "./CompanyAddress.css";
import { FaSearch } from 'react-icons/fa';

const CompanyAddress = () => {
  return (
    <div className="company-address">
      <h2>Company address</h2>
      <form>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="postcode">Postcode</label>
            <div className="search-box">
              <input type="text" id="postcode" placeholder="Search postcode"  style={{ borderRadius: '4px 0 0 4px' }} />
              <button type="button" className="search-btn">
                <FaSearch size={10}/>
              </button>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="address-line-1">Address Line 1</label>
            <input type="text" id="address-line-1" placeholder="Address 1" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="address-line-2">Address Line 2</label>
            <input type="text" id="address-line-2" placeholder="Address 2" />
          </div>
          <div className="form-group">
            <label htmlFor="city">Town/ City</label>
            <input type="text" id="city" placeholder="City" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="county">County</label>
            <input type="text" id="county" placeholder="County" />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <select id="country">
              <option value="">Country</option>
              <option value="UK">United Kingdom</option>
              <option value="SL">Sri Lanka</option>
              <option value="US">United States</option>
            </select>
          </div>
        </div>

        <div className="form-group upload-logo">
          <label htmlFor="logo-upload">
            Upload company logo here
          </label>
          <div className="upload-box">
            <input type="file" id="logo-upload" accept=".png" />
            <p>Upload logo in (.png) format</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CompanyAddress;
