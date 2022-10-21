import React, { useState, useEffect } from "react";
import "./formInput.css";

const FormInput = ({ labelText, Icon }) => {
  const [showBorder, setShowBorder] = useState(false);
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState();

  useEffect(() => {
    setShowBorder(focused);
  }, [focused]);

  return (
    <div style={{ margin: "1rem 0" }}>
      <label className="input-label">{labelText}</label>
      <div
        className="input-group mb-3 input-container"
        style={{
          borderColor: showBorder ? "hsl(172, 67%, 45%)" : "hsl(189, 41%, 97%)",
        }}
      >
        <div className="icon-container">
          <Icon />
        </div>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={() => setFocused(false)}
          onFocus={() => setFocused(true)}
          onMouseOver={() => setShowBorder(true)}
          onMouseOut={() => !focused && setShowBorder(false)}
          type="number"
          className="form-control shadow-none"
          placeholder="0"
        />
      </div>
    </div>
  );
};

export default FormInput;
