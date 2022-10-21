import React, { useState } from "react";
import "./formInput.css";

const FormInput = ({ labelText, Icon, value, dispatch }) => {
  const [showError, setShowError] = useState(false);

  return (
    <div className="custom-input">
      <div className="label-container">
        <label className="input-label">{labelText}</label>
        {showError && <label className="error-message">Can't be zero</label>}
      </div>
      <div
        className={`input-group mb-3 input-container ${
          showError && "error-container"
        }`}
      >
        <div className="icon-container">
          <Icon />
        </div>
        <input
          value={value || ""}
          onBlur={() =>
            value === 0 ? setShowError(true) : setShowError(false)
          }
          onChange={(e) => dispatch(e.target.value || 0)}
          type="number"
          className="form-control shadow-none"
          placeholder="0"
        />
      </div>
    </div>
  );
};

export default FormInput;
