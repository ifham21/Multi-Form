// companyInformation.js
import React from "react";
import "./CompanyInformation.css";

function CompanyInformation() {
  return (
    <div className="form-container">
      <h4>Company Information</h4>
      <div className="input-group">
        <div>
          <label>Approximate Number of Rental Properties Managed</label>
          <input type="text" placeholder="Add your value" />
        </div>
        <div>
          <label>Approximate Number of Sales Properties Marketed per Month</label>
          <input type="text" placeholder="Add your value" />
        </div>
      </div>

      <h4>Service Requirements (<span>*</span>check as appropriate)</h4>
      <div className="checkbox-group">
        <label><input type="checkbox" /> Media Packs (2D Photos, 360° Virtual Tours, Floorplans)</label>
        <label><input type="checkbox" /> 360° Mid-Term Inspection Reports Property</label>
        <label><input type="checkbox" /> 360° Inventory Reports Help to Buy Valuation Reports Level 1</label>
        <label><input type="checkbox" /> 360° Inventory Reports Help to Buy Valuation Reports Level 2</label>
        <label>
          <input type="checkbox" /> Valuation Reports Other (please specify) 
          <textarea placeholder="Please specify"></textarea>
        </label>
      </div>

      <h4>Frequency of Required Reports/Inspections</h4>
      <div className="radio-group">
        <label><input type="radio" name="frequency" /> Daily</label>
        <label><input type="radio" name="frequency" /> Weekly</label>
        <label><input type="radio" name="frequency" /> Monthly</label>
        <label><input type="radio" name="frequency" /> As needed</label>
      </div>

      <h4>Preferred Method of Delivery for Reports</h4>
      <div className="radio-group">
        <label><input type="radio" name="delivery" /> Email</label>
        <label><input type="radio" name="delivery" /> Portal Download</label>
        <label><input type="radio" name="delivery" /> Physical Mail</label>
      </div>

      <h4>Additional Information</h4>
      <textarea placeholder="Add about your agency or specific needs that would help us serve you better (Optional)"></textarea>

      <h4>Payment Method</h4>
      <div className="checkbox-group">
        <label><input type="checkbox" /> Pay as you go (payment required before request of service)</label>
        <label><input type="checkbox" /> 7 Day Invoice (25% deposit required)</label>
      </div>
    </div>
  );
}

export default CompanyInformation;
