import React from "react";
import CalculatorForm from "../calculatorForm/CalculatorForm";
import Result from "../result/Result";
import { TipContextProvider } from "../../contexts/tipContext";
import "./calculatorCard.css";

const CalculatorCard = () => {
  return (
    <TipContextProvider>
      <div className="row main-calculator-layout">
        <div className="col-md-6 calculator-card mx-auto">
          <div className="row">
            <div className="col-md-6">
              <CalculatorForm />
            </div>
            <div className="col-md-6">
              <Result />
            </div>
          </div>
        </div>
      </div>
    </TipContextProvider>
  );
};

export default CalculatorCard;
