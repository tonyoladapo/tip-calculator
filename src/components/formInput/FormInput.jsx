import React, { useState, useEffect } from "react";
import "./formInput.css";

const FormInput = ({ labelText, Icon, value, dispatch }) => {
  const [showBorder, setShowBorder] = useState(false);
  const [focused, setFocused] = useState(false);
  const [borderColor, setBorderColor] = useState("hsl(189, 41%, 97%)");

  const validateForm = () => {
    if (value === 0) setBorderColor("10, 90%, 61%");
    else setBorderColor("hsl(189, 41%, 97%)");
  };

  return (
    <div style={{ margin: "1rem 0" }}>
      <label className="input-label">{labelText}</label>
      <div
        className="input-group mb-3 input-container"
        style={{
          borderColor,
          borderWidth: "2px",
        }}
      >
        <div className="icon-container">
          <Icon />
        </div>
        <input
          value={value || ""}
          onChange={(e) => dispatch(e.target.value || 0)}
          onBlur={() => {
            setFocused(false);
            validateForm();
          }}
          onFocus={() => setFocused(true)}
          onMouseOver={() => setBorderColor("hsl(172, 67%, 45%)")}
          onMouseOut={() => !focused && setBorderColor("hsl(189, 41%, 97%)")}
          type="number"
          className="form-control shadow-none"
          placeholder="0"
        />
      </div>
    </div>
  );
};

export default FormInput;
