import React from "react";
import "./result.css";

const Result = () => {
  return (
    <div className="result-layout">
      <div>
        <div className="result-container">
          <div className="result">
            <p className="result-title">Tip amount</p>
            <p className="person-text">/ person</p>
          </div>
          <div className="result">
            <h1>$0.00</h1>
          </div>
        </div>

        <div className="result-container">
          <div className="result">
            <p className="result-title">Total</p>
            <p className="person-text">/ person</p>
          </div>
          <div className="result">
            <h1>$0.00</h1>
          </div>
        </div>
      </div>

      <button disabled className="reset-button">
        RESET
      </button>
    </div>
  );
};

export default Result;
