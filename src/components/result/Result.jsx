import React from "react";
import useResult from "../../hooks/useResult";
import "./result.css";

const Result = () => {
  const { tipPerPerson, totalPerPerson, reset, disabled } = useResult();

  return (
    <div className="result-layout">
      <div>
        <div className="result-container">
          <div className="result">
            <p className="result-title">Tip amount</p>
            <p className="person-text">/ person</p>
          </div>
          <div className="result">
            <h1>{`$${tipPerPerson.toFixed(2)}`}</h1>
          </div>
        </div>

        <div className="result-container">
          <div className="result">
            <p className="result-title">Total</p>
            <p className="person-text">/ person</p>
          </div>
          <div className="result">
            <h1>{`$${totalPerPerson.toFixed(2)}`}</h1>
          </div>
        </div>
      </div>

      <button disabled={disabled} onClick={reset} className="reset-button">
        RESET
      </button>
    </div>
  );
};

export default Result;
