import React from "react";
import "./CurrentAddress.css";
import { FaSearch } from "react-icons/fa";

const PartnerCurrentAddress = () => {
  return (
    <div className="current-address">
      <h2>Current Address</h2>
      <p>
        We are required to collect a five-year address history. Please start with
        your current address.
      </p>
      <form>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="postcode">Postcode</label>
            <div className="search-box">
              <input
                type="text"
                id="postcode"
                placeholder="Search postcode"
              />
              <button type="button" className="search-btn">
                <FaSearch size={14} />
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
              <option value="">Select Country</option>
              <option value="UK">United Kingdom</option>
              <option value="SL">Sri Lanka</option>
              <option value="US">United States</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date-moved-in">Date Moved In</label>
            <input
              type="date"
              id="date-moved-in"
              placeholder="dd-mm-yyyy"
            />
          </div>
          <div className="form-group">
            <label htmlFor="proof-of-address">Proof of Address</label>
            <div className="upload-box">
              <input
                type="file"
                id="proof-of-address"
                accept=".png, .jpg, .jpeg, .pdf"
              />
              <p>Upload proof of Address</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PartnerCurrentAddress;
