import React, { useState } from "react";
import "./SecondForm.css"; // Import the CSS file

const SecondForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    address: "",
    bloodGroup: "",
    numberOfHoursWorked: 0,
    branchLocation: "",
    eligibleForPromotion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Blood Group:</label>
          <input
            type="text"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Number of Hours Worked:</label>
          <input
            type="number"
            name="numberOfHoursWorked"
            value={formData.numberOfHoursWorked}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Branch Location:</label>
          <input
            type="text"
            name="branchLocation"
            value={formData.branchLocation}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Eligible for Promotion:</label>
          <select
            name="eligibleForPromotion"
            value={formData.eligibleForPromotion}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SecondForm;
