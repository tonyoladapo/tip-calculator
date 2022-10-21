import React, { useEffect, useState } from "react";
import FormInput from "../formInput/FormInput";
import TipSelector from "../tipSelector/TipSelector";
import person from "../../assets/img/icon-person.svg";
import dollar from "../../assets/img/icon-dollar.svg";
import "./calculatorForm.css";

const CalculatorForm = () => {
  return (
    <>
      <FormInput labelText="Bill" icon={dollar} />
      <TipSelector />
      <FormInput labelText="Number of People" icon={person} />
    </>
  );
};

export default CalculatorForm;
