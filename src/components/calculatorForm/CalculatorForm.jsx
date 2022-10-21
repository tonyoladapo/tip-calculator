import React, { useEffect, useState } from "react";
import FormInput from "../formInput/FormInput";
import TipSelector from "../tipSelector/TipSelector";
import { ReactComponent as Person } from "../../assets/img/icon-person.svg";
import { ReactComponent as Dollar } from "../../assets/img/icon-dollar.svg";
import "./calculatorForm.css";

const CalculatorForm = () => {
  return (
    <>
      <FormInput labelText="Bill" Icon={Dollar} />
      <TipSelector />
      <FormInput labelText="Number of People" Icon={Person} />
    </>
  );
};

export default CalculatorForm;
